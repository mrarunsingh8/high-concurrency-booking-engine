### Class Diagram

``` mermaid
---
title: Book My Show Class Diagram
---
classDiagram

    Person "1" o-- "*" Movies : contains
    Genere "1" o-- "*" Movies : contains
    Language "1" o-- "*" Movies : contains
    MovieType "1" o-- "*" Movies : contains

    City "1" *-- "*" Theater : has a
    Theater "1" *-- "*" Movies : has a
    Theater "1" *-- "*" Show : has a
    Theater "1" *-- "*" Screen : has a
    Screen "1" *-- "*" Seat : has a
    Show --> Screen : Host in a 

    BookingManager "1" *-- "*" Booking : has a

    class Genere {
        - name String

        + getName() String
        + setName(name String) Boolean
    }

    class Person {
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

    class Movies {
        - String name
        - duration String
        - release_date String
        - description String

        - cast~List~ Persons
        - crew~List~ Persons
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

        + getCast() Person
        + setCast(cast Person) Boolean

        + getCrew() Person
        + setCrew(crew Person) Boolean

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
        - status~ENUM~ PENDING,CONFIRMED,CANCELLED,EXPIRED
        - paymentStatus~ENUM~ PENDING,SUCCESS,FAILED,REFUNDED
    }

    class BookingManager {
        booking Booking
        
    }


```