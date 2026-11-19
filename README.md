# High Concurrency Booking Engine

## Entities Relationship Diagram
    

```mermaid
---
title: ER Diagram
---
erDiagram

    USERS }o--o{ USER_OTPS : has
    CITIES ||--|| USERS : selected_by
    CITIES ||--o{ THEATER: has
    THEATER ||--|{SCREENS: has
    MOVIES ||--|{SHOWS: play
    SCREENS ||--|{SHOWS: host
    SCREENS ||--o{THEATER_SHEETS: provides
    MOVIES }o--o{LANGUAGES: has
    MOVIES }o--o{GENERE: includes
    MOVIES }o--o{MOVIE_TYPES: has
    MOVIES ||--o{PERSONS: CAST
    MOVIES ||--o{PERSONS: CREW
    BOOKINGS ||--o{BOOKINGSHEET: has
    BOOKINGS ||--||MOVIES: has
    BOOKINGS ||--|| CITIES: has
    BOOKINGS ||--|| THEATER: has
    BOOKINGSHEET ||--|| SHOWS: has
    BOOKINGSHEET ||--|| SCREENS: has
    BOOKINGSHEET ||--|| THEATER_SHEETS: has

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
        duration `VARCHAR(500) NOT NULL`
        release_date DATETIME
        description `VARCHAR(5000) NULL`
    }

    MOVIE_TYPES {
        ID `INT AUTO_INCREMENT PRIMARY KEY`
        name VARCHAR(200) NOT NULL
    }

    GENERE {
        ID `INT AUTO_INCREMENT PRIMARY KEY`
        name VARCHAR(200) NOT NULL
    }

    LANGUAGES {
      ID `INT AUTO_INCREMENT PRIMARY KEY`
      name `VARCHAR(500) NOT NULL`
    }

    PERSONS {
        ID `INT AUTO_INCREMENT PRIMARY KEY`
        name `VARCHAR(100) NOT NULL` 
        act_as `VARCHAR(100) NOT NULL` 
        image `VARCHAR(100) NOT NULL` 
    }

    BOOKINGS {
        ID `BIGINT AUTO_INCREMENT PRIMARY KEY`
        transactionId `varchar(250) DEFAULT NULL`
        city_id `INT NOT NULL`
        theater_id `INT NOT NULL`
        movie_id `INT NOT NULL`
        date `DATE NOT NULL`
        time `DATE NOT NULL`
        amount `FLOAT not null`
        paymentStatus `ENUM('Process','Complete','Pending','Cancelled') DEFAULT 'Process'`
        created_at `DATETIME NOT NULL`
        updated_at `DATETIME NOT NULL`
    }

    BOOKINGSHEET {
        ID `BIGINT AUTO_INCREMENT PRIMARY KEY`
        booking_id `BIGINT(20) NOT NULL`
        show_id `INT AUTO_INCREMENT NOT NULL`
        screen_id `INT AUTO_INCREMENT NOT NULL`
        row `varchar NOT NULL`
        sheetNumber `varchar NOT NULL`
    }


```