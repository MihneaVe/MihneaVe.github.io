# personal-website
This is a personal website project built with Flask to showcase my work and skills. 

## Project Structure
```
personal-website
├── app
│   ├── __init__.py
│   ├── routes.py
│   ├── models.py
│   ├── forms.py
│   ├── templates
│   │   ├── base.html
│   │   ├── index.html
│   │   ├── about.html
│   │   ├── projects.html
│   │   ├── resume.html
│   │   └── contact.html
│   └── static
│       ├── css
│       │   └── style.css
│       ├── js
│       │   └── main.js
│       └── img
├── config.py
├── run.py
├── requirements.txt
├── .gitignore
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd personal-website
   ```
3. Create a virtual environment:
   ```
   python -m venv venv
   ```
4. Activate the virtual environment:
   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```
     source venv/bin/activate
     ```
5. Install the required packages:
   ```
   pip install -r requirements.txt
   ```
6. Run the application:
   ```
   python run.py
   ```

## Features
- Home page showcasing my latest work.
- About page with personal information.
- Projects page displaying my projects.
- Resume page with downloadable resume.
- Contact page with a form for inquiries.

## Technologies Used
- Flask
- SQLAlchemy
- Flask-WTF
- HTML/CSS/JavaScript

## License
This project is licensed under the MIT License.