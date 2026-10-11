# Description

Theme for JSON Resume. It is very basic and can therefore be used both as a theme and boilerplate. The theme covers every single key of the JSON Resume schema](https://github.com/jsonresume/jsonresume.org/tree/master/packages/schema).

## Preview

<img src="https://github.com/user-attachments/assets/b849a352-675f-46a3-81ef-c3f543ca8f9b" alt="Example Resume - Page 1" width="200"/>
<img src="https://github.com/user-attachments/assets/3ad18d6d-0170-4798-8dc7-bfa08fdbcac0" alt="Example Resume - Page 2" width="200"/>
<img src="https://github.com/user-attachments/assets/853486a4-9fa1-4448-9ce7-b2ed06cdc5b2" alt="Example Resume - Page 3" width="200"/>

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
