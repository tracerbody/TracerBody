Web Application Vulnerability Patterns Dataset
==============================================

Dataset Information:
- Name: Web Application Vulnerability Patterns Dataset
- Version: 1.0
- Created: September 2024
- License: MIT License
- Source: TracerBody Research Team

Description:
This dataset contains sanitized vulnerability patterns extracted from public security advisories and CVE databases. It includes 25,000 anonymized vulnerability records with classification and severity information, designed for cybersecurity research and machine learning applications.

Dataset Characteristics:
- Format: CSV (Comma Separated Values)
- Size: ~25,000 vulnerability records
- Features: 18 columns
- Data Source: Public CVE databases and security advisories

Column Descriptions:
1. cve_id - Synthetic CVE identifier (format: CVE-YYYY-NNNN)
2. vulnerability_type - Type of vulnerability (XSS, SQL_INJECTION, RCE, etc.)
3. severity - Severity level (LOW, MEDIUM, HIGH, CRITICAL)
4. cvss_score - CVSS v3.1 base score (0.0-10.0)
5. affected_component - Component affected by the vulnerability
6. attack_vector - Attack vector (network, local, physical, adjacent)
7. complexity - Attack complexity (low, high)
8. privileges_required - Privileges required (none, low, high)
9. user_interaction - User interaction required (none, required)
10. scope - Scope of impact (unchanged, changed)
11. confidentiality_impact - Impact on confidentiality (none, low, high)
12. integrity_impact - Impact on integrity (none, low, high)
13. availability_impact - Impact on availability (none, low, high)
14. base_score - CVSS base score
15. temporal_score - CVSS temporal score
16. environmental_score - CVSS environmental score
17. description_length - Length of vulnerability description in characters
18. vendor - Anonymized vendor identifier
19. product_category - Category of affected product
20. discovery_date - Date when vulnerability was discovered

Vulnerability Types Included:
- XSS (Cross-Site Scripting)
- SQL_INJECTION (SQL Injection)
- RCE (Remote Code Execution)
- CSRF (Cross-Site Request Forgery)
- LFI (Local File Inclusion)
- SSRF (Server-Side Request Forgery)
- DIRECTORY_TRAVERSAL (Directory Traversal)
- AUTHENTICATION_BYPASS (Authentication Bypass)
- BUFFER_OVERFLOW (Buffer Overflow)
- PRIVILEGE_ESCALATION (Privilege Escalation)
- DESERIALIZATION (Insecure Deserialization)
- WEAK_CRYPTO (Weak Cryptography)
- SESSION_FIXATION (Session Fixation)
- XXE (XML External Entity)
- COMMAND_INJECTION (Command Injection)
- INFORMATION_DISCLOSURE (Information Disclosure)
- RACE_CONDITION (Race Condition)
- CLICKJACKING (Clickjacking)
- PATH_TRAVERSAL (Path Traversal)
- LDAP_INJECTION (LDAP Injection)
- WEAK_AUTHENTICATION (Weak Authentication)
- INSECURE_REDIRECT (Insecure Redirect)
- MEMORY_LEAK (Memory Leak)
- TIMING_ATTACK (Timing Attack)

Product Categories:
- CMS (Content Management System)
- E-commerce platforms
- Web servers
- APIs and web services
- Frameworks and libraries
- Operating systems
- Database systems
- Authentication services
- File management systems
- Media players
- Development tools

Data Sources:
This dataset is derived from publicly available sources including:
- National Vulnerability Database (NVD)
- CVE database
- Security advisories from major vendors
- Open source security research

Data Processing:
- All vendor names and product names have been anonymized
- Sensitive details have been removed or generalized
- CVSS scores are based on official assessments
- Temporal and environmental scores are estimated based on typical scenarios

Usage Guidelines:
- Licensed under MIT License
- Attribution required: "TracerBody Research Team (2024). Web Application Vulnerability Patterns Dataset."
- Suitable for academic research, security tool development, and machine learning
- Can be used for vulnerability classification and severity prediction models
- Appropriate for training security awareness systems

Research Applications:
- Vulnerability classification and categorization
- Severity prediction models
- Trend analysis in cybersecurity
- Security metrics development
- Risk assessment methodologies
- Machine learning for security

Limitations:
- Data is anonymized and may not reflect specific vendor characteristics
- Temporal and environmental scores are estimates
- Dataset represents a snapshot and may not include latest vulnerabilities
- Some vulnerability types may be underrepresented

Ethical Considerations:
- All data sourced from public databases and advisories
- No proprietary or confidential information included
- Anonymization protects vendor and product identities
- Designed to improve cybersecurity through research

Citation:
TracerBody Research Team (2024). Web Application Vulnerability Patterns Dataset. 
Licensed under MIT License. https://github.com/tracerbody/TracerBody

Contact:
For questions about this dataset, please contact:
- Email: datasets@tracerbody.org
- Website: https://tracerbody.github.io/TracerBody
- GitHub: https://github.com/tracerbody

Last Updated: September 27, 2024

