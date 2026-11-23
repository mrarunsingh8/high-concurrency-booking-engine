### Class Diagram

``` mermaid
---
title: Book My Show Class Diagram
---
classDiagram

    User "1" o-- "*" Booking : contains
    Genere "1" o-- "*" Movie : contains
    Language "1" o-- "*" Movie : contains
    MovieType "1" o-- "*" Movie : contains

    City "1" *-- "*" Theater : has a
    Theater "1" *-- "*" Screen : has a
    Screen "1" *-- "*" Seat : has a
    Screen *-- Show : has a
    Show "1" <-- "*" Movie : Plays

    Show "1" --> "*" Booking : has a

    Booking *-- BookingSeat: has a
    BookingSeat <-- Seat: refrence by
    Booking "1" o-- "*" Payment : has a

    Payment "1" o-- "*" PaymentManager : has a
    PaymentManager --> PaymentStrategy: Pick by method
    PaymentStrategy <-- CardPayment
    PaymentStrategy <-- UPIPayment


    class Genere {
        - name String

        + getName() String
        + setName(name String) Boolean
    }

    class User {
        - name String
        - role String
        - image String
        
        + getName() String
        + setName(name String) Boolean

        + getRole() String
        + setRole(role String) Boolean

        + getImage() String
        + setImage(image String) Boolean
    }

    class Language {
        - name String
        
        + getName() String
        + setName(name String) Boolean
    }

    class MovieType {
        - name String

        + getName() String
        + setName(name Strign) String
    }

    class Movie {
        - String name
        - duration String
        - release_date String
        - description String

        - cast~List~ Users
        - crew~List~ Users
        - generes~List~ Genere
        - languages~List~Language
        - movieTypes~List~MovieType

        + getName() String
        + setName(name String) String

        + getDuration() String
        + setDuration(duration String) Boolean

        + getReleaseDate() String
        + setReleaseDate(releaseDate String) Boolean

        + getDescription() String
        + setDescription(description String) Boolean

        + getCast() User
        + setCast(cast User) Boolean

        + getCrew() User
        + setCrew(crew User) Boolean

        + getGeneres()~List~ Genere
        + setGenere(genere Genere) Boolean

        + getLanguages()~List~ Language
        + setLanguage(language Language) Boolean

        + getMovieTypes()~List~ MovieType
        + setMovieType(movieType MovieType) Boolean
    }

    class City {
        - name String

        + getName() String
        + setName(name String) Boolean
    }

    class Theater {
        - name String
        - address String
        - screens~List<Screen>
        - shows~List~ Show

        + getName() String
        + setName(name String) Boolean

        + getAddress() String
        + setAddress(address String) Boolean

        + getScreens()~List~ Screen
        + setScreen(screen Screen) Boolean


        + getShow()~List~ Show
        + setShow() Boolean
    }

    class Screen {
        - name String
        - seats~List~ Seat

        + getName() String
        + setName(name String) Boolean

        + getSeats()~List~ Seat
        - setSeats(rows String, col Number) Boolean

    }

    class Seat {
        - row String
        - num Number

        + getRow() String
        + getNum() Number
    }

    class Show {
        - price Number
        - date String
        - timing String

        + getPrice() String
        + setPrice(price Number) Boolean

        + getDate() String
        + setDate(date String) Boolean

        + getTiming() String
        + setTiming(timing String) Boolean
    }

    class Booking {
        - datetime String
        - amount Number
        - status BookingStatus
        - paymentStatus PaymentStatus
    }

    class BookingStatus {
        <<enumeration>>
        PENDING
        CONFIRMED
        CANCELLED
        EXPIRED
    }

    class BookingSeat {
        - row String
        - num Number

        + getRow() String
        + setRow(row String) Boolean

        + getNum() Number
        + setNum(num String) Boolean
    }

    class Payment {
        booking Booking
        amount Number
        paymentStatus PaymentStatus
        paymentMethod PaymentMethod
    }

    class PaymentStrategy {
        <<interface>>
        +pay(paymentPayment) PaymentStatus
    }

    class CardPayment {
        + pay(paymentPayment)
    }

    class UPIPayment {
        pay(paymentPayment)
    }

    class PaymentManager {
        -strategies Map~PaymentMethod, PaymentStrategy~
        +pay(payment Payment) PaymentStatus
    }

    class PaymentMethod {
        <<enumeration>>
        CARD
        UPI
    }

    class PaymentStatus {
        <<enumeration>>
        PENDING
        SUCCESS
        FAILED
        REFUNDED
    }


```