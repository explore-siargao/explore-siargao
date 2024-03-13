import React, { useCallback, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { Transforms, Editor } from "slate";
import { Bold, ItalicIcon, List, ListOrdered } from "lucide-react";

type CustomElement =
  | { type: "paragraph"; children: CustomText[] }
  | { type: "list-item" | "ordered-list-item"; children: CustomText[] }
  | { type: "ordered-list"; children: CustomElement[] };
type CustomText = { text: string; bold?: boolean; italic?: boolean };

const initialValue: CustomElement[] = [
  { type: "paragraph", children: [{ text: "A line of text in a paragraph." }] }
];

const RichTextEditor = () => {
  const [editor] = useState(() => withReact(createEditor()));
  const [value, setValue] = useState(initialValue);
  const [history, setHistory] = useState<CustomElement[][]>([initialValue]);

  const pushToHistory = () => setHistory([...history, value]);
  const popFromHistory = () => {
    const newHistory = [...history];
    const newValue = newHistory.pop();
    if (newValue) {
      setValue(newValue);
      setHistory(newHistory);
    }
  };

  const toggleMark = (format: string) => {
    const isActive = isMarkActive(format);
    Editor.addMark(editor, format, !isActive);
  };

  const isMarkActive = (format: string) => {
    const [match] = Editor.nodes(editor, { match: (n) => n[format] === true });
    return !!match;
  };

  const toggleList = (type: string) => {
    const isActive = isListActive(type);
    if (isActive) {
      Transforms.unwrapNodes(editor, { match: (n) => n.type === type, split: true });
    } else {
      Transforms.wrapNodes(editor, { type, children: [] });
      Transforms.wrapNodes(editor, { type: type === "ordered-list" ? "ordered-list-item" : "list-item", children: [] });
    }
  };

  const isListActive = (type: string) => {
    const [match] = Editor.nodes(editor, { match: (n) => n.type === type });
    return !!match;
  };

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "list-item": return <ListItemElement {...props} />;
      case "ordered-list": return <OrderedListElement {...props} />;
      case "ordered-list-item": return <ListItemElement {...props} />;
      default: return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    const style: React.CSSProperties = {};
    if (props.leaf.bold) style.fontWeight = "bold";
    if (props.leaf.italic) style.fontStyle = "italic";
    return <span {...props.attributes} style={style}>{props.children}</span>;
  }, []);

  const Toolbar = () => (
    <div className="flex gap-2 border-1 shadow-md my-4 pl-2 h-10 w-60">
      <button onMouseDown={() => toggleMark("bold")}><Bold size="15px" /></button>
      <button onMouseDown={() => toggleMark("italic")}><ItalicIcon size="15px" /></button>
      <button onMouseDown={() => toggleList("list")}><List size="17px" /></button>
      <button onMouseDown={() => toggleList("ordered-list")}><ListOrdered size="18px" /></button>
    </div>
  );

  const ListItemElement = ({ attributes, children }: { attributes: React.HTMLAttributes<HTMLLIElement>; children: React.ReactNode }) => (
    <li {...attributes} style={{ listStyleType: "disc", marginLeft: "1em" }}>{children}</li>
  );

  const OrderedListElement = (props: any) => <ol {...props.attributes}>{props.children}</ol>;
  const DefaultElement = (props: any) => <p {...props.attributes}>{props.children}</p>;

  return (
    <>
      <Slate
        editor={editor}
        initialValue={initialValue}
        onChange={(newValue) => { setValue(newValue); pushToHistory(); }}
      >
        <Toolbar />
        <Editable
          className="bg-gray-100 h-20 rounded-lg p-2"
          editor={editor}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={(event) => {
            if (!event.ctrlKey) return;
            switch (event.key) {
              case "b": toggleMark("bold"); break;
              case "i": toggleMark("italic"); break;
              case "z": popFromHistory(); break;
              default: break;
            }
          }}
        />
      </Slate>
      <div>
        <h2 className="pt-4">Result:</h2>
        <div>{value.map((el, index) => <div key={index}>{el.children.map((text, i) => (
          <span key={i} style={{ fontWeight: text.bold ? "bold" : "normal", fontStyle: text.italic ? "italic" : "normal" }}>{text.text}</span>
        ))}</div>)}</div>
      </div>
    </>
  );
};

export default RichTextEditor;
