### Class Diagram

``` mermaid
---
title: BookMyShow - Backend Class Diagram
---
classDiagram
    direction LR

    class User {
        +UUID id
        +String name
        +String email
        +String phone
    }

    class City {
        +UUID id
        +String name
        +String state
    }

    class Theater {
        +UUID id
        +String name
        +String address
    }

    class Screen {
        +UUID id
        +String name
        +String screenType
    }

    class Seat {
        +UUID id
        +String rowLabel
        +Integer seatNumber
        +String seatType
    }

    class Movie {
        +UUID id
        +String title
        +Integer durationMinutes
        +Date releaseDate
        +String description
        +String posterUrl
        +String status
    }

    class Person {
        +UUID id
        +String name
        +String imageUrl
    }

    class MovieCredit {
        +UUID id
        +String role
        +String characterName
    }

    class Genre {
        +UUID id
        +String name
    }

    class Language {
        +UUID id
        +String name
    }

    class Show {
        +UUID id
        +DateTime startTime
        +DateTime endTime
        +String status
        +String format
    }

    class ShowSeat {
        +UUID id
        +Decimal price
        +String status
    }

    class Booking {
        +UUID id
        +String bookingReference
        +Decimal totalAmount
        +String bookingStatus
        +DateTime createdAt
        +DateTime expiresAt
    }

    class BookingSeat {
        +UUID id
        +Decimal bookedPrice
    }

    class Payment {
        +UUID id
        +String transactionId
        +Decimal amount
        +String paymentStatus
        +String paymentMethod
        +DateTime paidAt
    }

    %% Geography and theater infrastructure
    City "1" --> "0..*" Theater : contains
    Theater "1" *-- "1..*" Screen : owns
    Screen "1" *-- "1..*" Seat : contains

    %% Movie metadata
    Movie "0..*" -- "0..*" Genre : categorized by
    Movie "0..*" -- "0..*" Language : available in
    Movie "1" *-- "0..*" MovieCredit : has credits
    Person "1" -- "0..*" MovieCredit : participates in

    %% Show scheduling
    Movie "1" --> "0..*" Show : scheduled as
    Screen "1" --> "0..*" Show : hosts

    %% Seat inventory for each show
    Show "1" *-- "0..*" ShowSeat : maintains inventory
    Seat "1" --> "0..*" ShowSeat : listed in

    %% Booking
    User "1" --> "0..*" Booking : makes
    Show "1" --> "0..*" Booking : booked for
    Booking "1" *-- "1..*" BookingSeat : contains
    ShowSeat "1" --> "0..*" BookingSeat : referenced by

    %% Payments
    Booking "1" --> "0..*" Payment : has payment attempts

```

