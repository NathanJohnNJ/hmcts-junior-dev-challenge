# hmcts-junior-dev-challenge

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Overview

A task management system where users can create and view tasks with room for more CRUD operations to follow. It uses PostgreSQL for the database, Express for the backend (routing and linking to the database), Vite/React for the frontend, and Node.js to link it all together.

**Checkout the live version at [hmcts.njtd.xyz](https://hmcts.njtd.xyz)**

## Key Functionalities

- [ ] Ability to create and store multiple tasks
- [ ] Ability to view multiple tasks
- [ ] Allow for future development of more CRUD operations

## Characterstics

- ### Task

  - Start date
  - End date
  - Title
  - Overview
  - Priority
  - Color coded which automatically changes as deadline approaches
  - AI Overview:
    - Technologies involved
    - acheivability
    - advice

### Structure

- backend: Express + pg backend. Run `cd backend; npm install` then `npm run dev`.
- frontend: Vite + React frontend. Run `cd frontend; npm install` then `npm run dev`.
- fullstack: To run both the front and back end simultaneously, run `npm install` then `npm run dev`

### Development notes

- Copy `backend/.env.example` to `backend/.env` and set your `POSTGRES_DATABASE_URL`.
- You can run the backend on port 5500 and the frontend on 5173. In development set `VITE_API_URL` in `frontend/.env` to `http://localhost:5500` if needed.
