# TracerBody

[![Deploy to GitHub Pages](https://github.com/tracerbody/TracerBody/actions/workflows/deploy.yml/badge.svg)](https://github.com/tracerbody/TracerBody/actions/workflows/deploy.yml)
[![CI](https://github.com/tracerbody/TracerBody/actions/workflows/ci.yml/badge.svg)](https://github.com/tracerbody/TracerBody/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

TracerBody is a cybersecurity research organization dedicated to advancing security through responsible research, breach awareness, and ethical data disclosure practices. This repository contains our main website and research resources.

## 🌐 Live Website

Visit our website at: [https://tracerbody.github.io/TracerBody](https://tracerbody.github.io/TracerBody)

## 🎯 Mission

We advance cybersecurity through responsible research, breach awareness, and ethical data disclosure practices that benefit the entire security community.

## 📁 Repository Structure

```
TracerBody/
├── index.html              # Homepage
├── research.html           # Research publications
├── datasets.html           # Research datasets
├── tools.html             # Security tools
├── about.html             # About us
├── contact.html           # Contact information
├── responsible-disclosure.html  # Disclosure policy
├── css/                   # Stylesheets
│   └── input.css         # Tailwind CSS input
├── js/                    # JavaScript files
│   └── main.js           # Main JavaScript functionality
├── assets/               # Static assets (images, icons)
├── datasets/             # Research datasets
│   ├── network-traffic-anomalies.csv
│   ├── web-vuln-patterns.csv
│   └── *.readme.txt      # Dataset documentation
├── reports/              # Research reports
│   ├── q3-2024-threat-landscape.pdf
│   ├── web-app-security-assessment.pdf
│   └── *.md             # Report source files
├── dist/                 # Built website (generated)
├── .github/              # GitHub Actions workflows
│   └── workflows/
│       ├── deploy.yml    # Deployment workflow
│       └── ci.yml        # Continuous integration
└── docs/                 # Additional documentation
```

## 🚀 Quick Start

### Prerequisites

- Node.js 16.0.0 or higher
- npm 8.0.0 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tracerbody/TracerBody.git
cd TracerBody
```

2. Install dependencies:
```bash
npm install
```

3. Build the website:
```bash
npm run build
```

4. Serve locally:
```bash
npm run serve
```

The website will be available at `http://localhost:8080`

## 🛠️ Development

### Available Scripts

- `npm run dev` - Build CSS and start development server
- `npm run build` - Build production version
- `npm run build:css` - Build CSS only
- `npm run build:css:dev` - Build CSS with watch mode
- `npm run serve` - Serve the built website
- `npm run test` - Run all tests
- `npm run lint` - Run linting
- `npm run validate` - Build and test
- `npm run preview` - Build and serve for preview

### Development Workflow

1. Make changes to HTML, CSS, or JavaScript files
2. Run `npm run build:css:dev` for live CSS compilation
3. Use `npm run serve` to test changes locally
4. Run `npm run validate` before committing

### CSS Development

This project uses Tailwind CSS for styling. The main CSS file is located at `css/input.css`. To compile CSS:

```bash
npm run build:css
```

For development with auto-compilation:

```bash
npm run build:css:dev
```

## 📊 Datasets

Our research datasets are available in the `datasets/` directory:

### Network Traffic Anomalies Dataset
- **File**: `network-traffic-anomalies.csv`
- **Size**: ~50,000 synthetic network flow records
- **License**: CC BY 4.0
- **Description**: Sanitized network traffic patterns with labeled anomalies

### Web Vulnerability Patterns Dataset
- **File**: `web-vuln-patterns.csv`
- **Size**: ~25,000 vulnerability records
- **License**: MIT
- **Description**: Anonymized vulnerability patterns from public CVE databases

Each dataset includes comprehensive documentation in accompanying README files.

## 📄 Reports

Research reports are available in both Markdown and PDF formats in the `reports/` directory:

- **Q3 2024 Threat Landscape Report**: Analysis of cybersecurity threats and trends
- **Web Application Security Assessment Methodology**: Comprehensive testing procedures

## 🔧 Tools

We develop and maintain various open-source cybersecurity tools:

- **WebVuln Scanner**: Web application vulnerability scanner
- **NetTrace Analyzer**: Network traffic analysis tool
- Additional tools available on our [GitHub organization](https://github.com/tracerbody)

## 🤝 Contributing

We welcome contributions from the cybersecurity community! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on how to get involved.

### Ways to Contribute

- Report bugs and security issues
- Suggest new features or improvements
- Contribute to our research datasets
- Improve documentation
- Submit code improvements

### Responsible Disclosure

If you discover security vulnerabilities, please follow our [Responsible Disclosure Policy](responsible-disclosure.html) and report them to security@tracerbody.org.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Individual datasets and reports may have different licenses as specified in their documentation.

## 🌟 Features

- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Dark Theme**: Professional dark theme optimized for security professionals
- **Research Resources**: Comprehensive datasets and reports
- **Open Source Tools**: Collection of cybersecurity tools
- **Responsible Disclosure**: Ethical vulnerability reporting process
- **GitHub Pages Deployment**: Automated deployment with GitHub Actions
- **SEO Optimized**: Proper meta tags and structured data

## 🔒 Security

Security is our top priority. This website implements:

- Content Security Policy (CSP)
- Secure HTTP headers
- Input validation and sanitization
- Regular security audits
- Automated vulnerability scanning

## 📞 Contact

- **Website**: [https://tracerbody.github.io/TracerBody](https://tracerbody.github.io/TracerBody)
- **Email**: contact@tracerbody.org
- **Security**: security@tracerbody.org
- **GitHub**: [https://github.com/tracerbody](https://github.com/tracerbody)

## 🙏 Acknowledgments

- The cybersecurity research community
- Open source contributors
- Security professionals who practice responsible disclosure
- Organizations that support ethical security research

## 📈 Project Status

This project is actively maintained and regularly updated with new research findings, datasets, and tools. Check our [GitHub Issues](https://github.com/tracerbody/TracerBody/issues) for current development status and planned features.

---

**TracerBody Research Team** - Advancing cybersecurity through responsible research and ethical disclosure practices.

