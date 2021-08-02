<!-- @format -->

# E.D.I.T.H Screen Recorder Installation

This is Installation Process for E.D.I.T.H Screen Recorder.

### Steps to Setup E.D.I.T.H Screen Recorder Environment

1. Download Nodejs from [Nodejs.org](https://nodejs.org/en/download).
1. Download Visual Studio Code from [Visual Studio](https://code.visualstudio.com/Download).
1. Download GitBash from [Git](https://git-scm.com/downloads).
1. Download MongoDB from [MongoDB](https://www.mongodb.org/downloads).
    1. Create a Account in MongoDB and make a Project.
    1. After creating a Project Create a Cluster and make a Database.
1. Create Project in [Google Cloud](https://console.cloud.google.com).
1. Rename `config.example.json` to `config.json`.
1. Fill the `config.json` file with your Own Credential Values.

### Steps to Install and Setup E.D.I.T.H Screen Recorder Backend/Server Process

1. Clone this repository.
    ```bash
    $ git clone https://github.com/koushikpuppala/E.D.I.T.H-Screen-Recorder.git
    ```
1. Go to the Server Directory.
    ```bash
    $ cd ./server/
    ```
1. Install Dependencies.
    ```bash
    $ npm install
    ```
1. Start the Server.
    ```bash
    $ npm start
    ```

### Steps to Install E.D.I.T.H Screen Recorder Frontend/Client Process

1. Go to the Client Directory
    ```bash
    $ cd ../client/
    ```
1. Install Dependencies
    ```bash
    $ npm install
    ```
1. Start the Server
    ```bash
    $ npm start
    ```
