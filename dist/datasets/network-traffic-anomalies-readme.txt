Network Traffic Anomalies Dataset
=====================================

Dataset Information:
- Name: Network Traffic Anomalies Dataset
- Version: 1.0
- Created: September 2024
- License: Creative Commons Attribution 4.0 International (CC BY 4.0)
- Source: TracerBody Research Team

Description:
This dataset contains sanitized network traffic patterns with labeled anomalies for cybersecurity research and education. The data includes both normal network traffic and various types of security-related anomalies including brute force attacks, denial of service attempts, and lateral movement patterns.

Dataset Characteristics:
- Format: CSV (Comma Separated Values)
- Size: ~50,000 synthetic network flow records
- Features: 23 columns
- Labels: Binary classification (normal/anomaly) with detailed attack types

Column Descriptions:
1. timestamp - Time when the network flow was recorded
2. src_ip - Source IP address (anonymized)
3. dst_ip - Destination IP address (anonymized)
4. src_port - Source port number
5. dst_port - Destination port number
6. protocol - Network protocol (TCP/UDP)
7. packet_size - Average packet size in bytes
8. duration - Flow duration in seconds
9. bytes_sent - Total bytes sent from source to destination
10. bytes_received - Total bytes received from destination to source
11. tcp_flags - TCP flags (for TCP connections)
12. http_method - HTTP method (GET/POST/NULL for non-HTTP)
13. user_agent_length - Length of User-Agent string (0 for non-HTTP)
14. request_length - HTTP request length in bytes
15. response_length - HTTP response length in bytes
16. connection_state - Connection state (established/rejected/timeout)
17. service - Identified service (http/https/ssh/ftp/smtp/dns/rdp)
18. flag - Traffic classification flag (normal/suspicious)
19. attack_type - Specific attack type (none/brute_force/dos/lateral_movement)
20. label - Binary label (normal/anomaly)

Attack Types Included:
- Brute Force: SSH brute force login attempts
- DoS: Denial of Service attacks with small packets and timeouts
- Lateral Movement: Suspicious RDP connections indicating lateral movement
- Normal: Legitimate network traffic patterns

Data Generation:
This dataset contains entirely synthetic data generated for research purposes. No real network traffic or sensitive information is included. The data patterns are based on common network traffic characteristics and known attack signatures from public security research.

Usage Guidelines:
- This dataset is provided under CC BY 4.0 license
- Attribution required: "TracerBody Research Team (2024). Network Traffic Anomalies Dataset."
- Suitable for academic research, education, and security tool development
- Not suitable for production security systems without additional validation

Ethical Considerations:
- All data is synthetic and anonymized
- No privacy concerns as no real user data is included
- Generated using ethical research practices
- Designed to advance cybersecurity education and research

Citation:
TracerBody Research Team (2024). Network Traffic Anomalies Dataset. 
Licensed under CC BY 4.0. https://github.com/tracerbody/TracerBody

Contact:
For questions about this dataset, please contact:
- Email: datasets@tracerbody.org
- Website: https://tracerbody.github.io/TracerBody
- GitHub: https://github.com/tracerbody

Last Updated: September 27, 2024

