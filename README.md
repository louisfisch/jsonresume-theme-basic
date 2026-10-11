# Description

Theme for JSON Resume. It is very basic and can therefore be used both as a theme and boilerplate. The theme covers every single key of the JSON Resume schema](https://github.com/jsonresume/jsonresume.org/tree/master/packages/schema).

## Preview

<img alt="Example Resume - Page 1" src="https://i.imgur.com/BeiriUn.jpeg" width="200"/> <img alt="Example Resume - Page 2" src="https://i.imgur.com/KeYO1P3.jpeg" width="200"/> <img alt="Example Resume - Page 3" src="https://i.imgur.com/qc0BiSi.jpeg" width="200"/>

## Usage

### Theme

1. Make sure you have `resume-cli` installed

        npm install -g resume-cli

2. Install the theme

        npm install jsonresume-theme-basic

3. Serve your resume using the theme Basic

        resume serve -t basic

### Boilerplate

#### Using Docker

2. Download the repository and change the current working directory

        git clone https://github.com/louisfisch/jsonresume-theme-basic.git && cd jsonresume-theme-basic

2. Build the image then build, create and start the container in detached mode (container will run in the background)

        docker compose up --build --detach

3. Copy and paste your `resume.json` file in the current working directory

4. Serve your resume using Basic theme

        docker exec json-resume-theme-basic-nodejs resume serve -t .

#### Using your own environment

1. Make sure you have `resume-cli` installed

        npm install -g resume-cli

2. Download the repository and change the current working directory

        git clone https://github.com/louisfisch/jsonresume-theme-basic.git && cd jsonresume-theme-basic

3. Copy and paste your `resume.json` file in the current working directory

4. Serve your resume using Basic theme

        resume serve -t .
