body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
    color: #333;
}

header {
    background: linear-gradient(135deg, #ff7e5f, #feb47b);
    color: #fff;
    padding: 1em 0;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

header h1 {
    margin: 0;
    font-size: 2.5em;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
}

nav ul li a:hover {
    color: #333;
}

section {
    padding: 3em 1.5em;
    max-width: 900px;
    margin: auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

section h2 {
    border-bottom: 3px solid #ff7e5f;
    padding-bottom: 0.5em;
    color: #ff7e5f;
    font-size: 2em;
}

.project, .skill, .testimonial {
    background: #fafafa;
    border-radius: 10px;
    padding: 1.5em;
    margin-bottom: 1.5em;
    transition: transform 0.3s, box-shadow 0.3s;
}

.project:hover, .skill:hover, .testimonial:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

footer {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 1.5em 0;
    font-size: 0.9em;
}

@media (max-width: 768px) {
    header h1 {
        font-size: 2em;
    }

    nav ul li {
        display: block;
        margin: 10px 0;
    }
}