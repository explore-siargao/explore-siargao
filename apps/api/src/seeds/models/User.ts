export const User = `CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    first_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL,
    email_address VARCHAR(50) NOT NULL,
    address VARCHAR(240) NOT NULL, 
    contact_number VARCHAR(20), 
    birth_date VARCHAR(40), 
    password VARCHAR(250)
    is_active BOOLEAN
    created_at VARCHAR(100) NOT NULL,
    updated_at VARCHAR(100) NOT NULL,
    deleted_at VARCHAR(100) NOT NULL
)`

