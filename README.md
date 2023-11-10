# Basic theme for JSON Resume

Basic theme for JSON Resume is very... basic. It can therefore be used both as a theme and boilerplate. The theme covers every single key of the [JSON Resume schema](https://github.com/jsonresume/resume-schema).

## Preview

![Louis Fischer Resume](https://github.com/louisfisch/jsonresume-theme-basic/assets/9432699/2657cd2e-72e8-432c-9820-6dab39e611f5)

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

        docker exec jsonresume-theme-basic node_modules/.bin/resume serve -t .

#### Using your own environment

1. Make sure you have `resume-cli` installed

        npm install -g resume-cli

2. Download the repository and change the current working directory

        git clone https://github.com/louisfisch/jsonresume-theme-basic.git && cd jsonresume-theme-basic

3. Copy and paste your `resume.json` file in the current working directory

4. Serve your resume using Basic theme

        resume serve -t .
