# High Concurrency Booking Engine

## Entities
<!----
```mermaid

CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ ORDER_ITEM : contains
    PRODUCT ||--o{ ORDER_ITEM : includes
Users ||--o{ user_otps : has

```
-->

    

```mermaid


erDiagram

    USERS ||--o{ USER_OTPS : has
    CITIES ||--o{ USERS : selected_by
    CITIES ||--o{ THEATER: has
    THEATER ||--|{SCREENS: has
    MOVIES ||--|{SHOWS: play
    SCREENS ||--|{SHOWS: host
    THEATER_SHEETS ||--o{SCREENS: exist

    USERS {
        id `BIGINT AUTO_INCREMENT PRIMARY KEY`

        email `VARCHAR(255) UNIQUE`
        mobile `VARCHAR(20) UNIQUE`

        name `VARCHAR(100) NOT NULL`

        password_hash `VARCHAR(255) NULL`

        is_email_verified `BOOLEAN DEFAULT FALSE`
        is_mobile_verified `BOOLEAN DEFAULT FALSE`

        is_active `BOOLEAN DEFAULT TRUE`

        created_at `TIMESTAMP DEFAULT CURRENT_TIMESTAMP`
        updated_at `TIMESTAMP DEFAULT CURRENT_TIMESTAMP`

    }

    USER_OTPS {
        id `BIGINT AUTO_INCREMENT PRIMARY KEY`

        user_id `BIGINT NOT NULL`

        identifier `VARCHAR(255) NOT NULL`

        otp_hash `VARCHAR(255) NOT NULL`

        purpose `ENUM(
            'LOGIN',
            'REGISTER',
            'VERIFY'
        ) NOT NULL`

        expires_at `TIMESTAMP NOT NULL`

        verified_at `TIMESTAMP NULL`

        created_at `TIMESTAMP DEFAULT CURRENT_TIMESTAMP`

    }

    CITIES {
        id `INT AUTO_INCREMENT PRIMARY KEY`
        name `VARCHAR(50) NOT NULL`
    }

    THEATER {
        id `INT AUTO_INCREMENT PRIMARY KEY`
        city_id `INT NOT NULL`
        name `VARCHAR(250) NOT NULL`
        address `VARCHAR(50) NOT NULL`
    }

    SCREENS {
        id `INT AUTO_INCREMENT PRIMARY KEY`
        theater_id  `INT NOT NULL`
        name `VARCHAR(250) NOT NULL`
    }

    THEATER_SHEETS {
        screenId   `bigint(20) NOT NULL`
        row `varchar(10) NOT NULL`
        sheetNumber `int(11) NOT NULL`
    }

    SHOWS {
        id `INT AUTO_INCREMENT PRIMARY KEY`
        screen_id  `INT NOT NULL`
        movie_id  `INT NOT NULL`
        price `FLOAT NOT NULL`
        date `DATE DEFAULT NULL`
        timing `TIME DEFAULT NULL`
    }

    MOVIES {
        id `INT AUTO_INCREMENT PRIMARY KEY`
        name `VARCHAR(500) NOT NULL`
        date `VARCHAR(500) NOT NULL`
        string `VARCHAR(500) NOT NULL`
    }

    



    LANGUAGES {
      ID `INT AUTO_INCREMENT PRIMARY KEY`
      name `VARCHAR(500) NOT NULL`
    }
```