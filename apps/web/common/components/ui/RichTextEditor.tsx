import React, { useCallback, useState } from "react"
import { createEditor } from "slate"
import { Slate, Editable, withReact } from "slate-react"
import { BaseEditor } from "slate"
import { ReactEditor } from "slate-react"
import { Editor, Transforms } from "slate"
import { Bold, ItalicIcon, List, ListOrdered } from "lucide-react"

type CustomElement =
  | { type: "paragraph"; children: CustomText[] }
  | { type: "list-item"; children: CustomText[] }
type CustomText = { text: string }

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

const CustomEditor = {
  isBoldMarkActive(editor: BaseEditor & ReactEditor) {
    const marks = Editor.marks(editor)
    return marks ? marks.bold === true : false
  },

  toggleList(editor: BaseEditor & ReactEditor) {
    const isActive = CustomEditor.isListActive(editor)

    const { selection } = editor

    if (isActive) {
      Transforms.unwrapNodes(editor, {
        match: (n) => n.type === "list-item",
        split: true,
      })
    } else {
      const newList = { type: "list-item", children: [] }
      Transforms.wrapNodes(editor, newList, { split: true, at: selection })
    }
  },

  isListActive(editor: BaseEditor & ReactEditor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "list-item",
    })
    return !!match
  },

  toggleItalicMark(editor: BaseEditor & ReactEditor) {
    console.log("function to italized is working!")
    const isActive = CustomEditor.isItalicMarkActive(editor)
    if (isActive) {
      Editor.removeMark(editor, "italic")
    } else {
      Editor.addMark(editor, "italic", true)
    }
  },

  isItalicMarkActive(editor: BaseEditor & ReactEditor) {
    const marks = Editor.marks(editor)
    return marks ? marks.italic === true : false
  },

  toggleBoldMark(editor: BaseEditor & ReactEditor) {
    const isActive = CustomEditor.isBoldMarkActive(editor)
    if (isActive) {
      Editor.removeMark(editor, "bold")
    } else {
      Editor.addMark(editor, "bold", true)
    }
  },
  toggleOrderedList(editor) {
    console.log("this is for ordered list!")
    const isActive = CustomEditor.isOrderedListActive(editor)
    const { selection } = editor

    if (isActive) {
      Transforms.unwrapNodes(editor, {
        match: (n) => n.type === "list-item",
        split: true,
      })
    } else {
      const newOrderedList = { type: "ordered-list", children: [] }
      Transforms.wrapNodes(editor, newOrderedList, {
        split: true,
        at: selection,
      })
    }
  },

  isOrderedListActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "ordered-list",
    })
    return !!match
  },
}

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
]

const RichTextEditor = () => {
  const [editor] = useState(() => withReact(createEditor()))

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "list-item":
        return <ListItemElement {...props} />
      case "ordered-list-item":
        return <OrderedListItemElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  const renderLeaf = useCallback((props) => {
    let style = {}
    if (props.leaf.bold) {
      style.fontWeight = "bold"
    }
    if (props.leaf.italic) {
      style.fontStyle = "italic"
    }
    return (
      <span {...props.attributes} style={style}>
        {props.children}
      </span>
    )
  }, [])

  const Toolbar = () => (
    <div className="flex gap-2 border-1 shadow-md my-4 pl-2 h-10 w-60">
      <button
        onMouseDown={(event) => {
          event.preventDefault()
          CustomEditor.toggleBoldMark(editor)
        }}
      >
        <Bold size="15px"></Bold>
      </button>

      <button
        onMouseDown={(event) => {
          event.preventDefault()
          CustomEditor.toggleItalicMark(editor)
        }}
      >
        <ItalicIcon size="15px"></ItalicIcon>
      </button>
      <button
        onMouseDown={(event) => {
          event.preventDefault()
          CustomEditor.toggleList(editor)
        }}
      >
        <List size="17px" />
      </button>
      <button
        onMouseDown={(event) => {
          event.preventDefault()
          CustomEditor.toggleOrderedList(editor)
        }}
      >
        <ListOrdered size="18px" />
      </button>
    </div>
  )

  const ListItemElement = ({
    attributes,
    children,
    element,
  }: {
    attributes: React.HTMLAttributes<HTMLLIElement>
    children: React.ReactNode
    element: { type: string }
  }) => {
    const listStyleType = element.type === "ordered-list" ? "decimal" : "disc"

    return (
      <li
        className="ml-4 py-1"
        {...attributes}
        style={{
          listStylePosition: "inside",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span className="inline-block mr-2" style={{ listStyleType }}>
          &#8226;
        </span>
        {children}
      </li>
    )
  }

  return (
    <Slate editor={editor} initialValue={initialValue} className="border-3">
      <Toolbar />
      <Editable
        className="bg-gray-100 h-40 rounded-lg p-2"
        editor={editor}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={(event) => {
          if (!event.ctrlKey) {
            return
          }
          switch (event.key) {
            case "b": {
              event.preventDefault()
              CustomEditor.toggleBoldMark(editor)
              break
            }
            case "i": {
              event.preventDefault()
              CustomEditor.toggleItalicMark(editor)
              break
            }

            case "l": {
              event.preventDefault()
              CustomEditor.toggleList(editor)
              break
            }
            case "o": {
              event.preventDefault()
              CustomEditor.toggleOrderedList(editor)
              break
            }
          }
        }}
      />
    </Slate>
  )
}

const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>
}

export default RichTextEditor
