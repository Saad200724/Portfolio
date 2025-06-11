import os
import smtplib
from email.message import EmailMessage

def send_contact_email(name, email, message):
    """Send contact form submission to the website owner using Gmail SMTP"""
    
    # Gmail SMTP configuration
    smtp_server = "smtp.gmail.com"
    smtp_port = 587
    sender_email = "saadbintofayeltahsin@gmail.com"
    sender_password = os.environ.get('GMAIL_APP_PASSWORD')
    
    if not sender_password:
        print("GMAIL_APP_PASSWORD environment variable not set")
        return False
    
    try:
        # Create message
        msg = EmailMessage()
        msg['From'] = sender_email
        msg['To'] = "saadbintofayeltahsin@gmail.com"
        msg['Subject'] = f"New Contact Form Submission from {name}"
        
        # Email body
        html_body = f"""
        <html>
        <body>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Message:</strong></p>
            <p>{message}</p>
        </body>
        </html>
        """
        
        msg.set_content(html_body, subtype='html')
        
        # Send email
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(sender_email, sender_password)
        server.send_message(msg)
        server.quit()
        
        print(f"Email sent successfully to {sender_email}")
        return True
        
    except Exception as e:
        print(f"Gmail SMTP error: {e}")
        return False

def send_confirmation_email(name, email):
    """Send confirmation email to the person who submitted the form"""
    
    smtp_server = "smtp.gmail.com"
    smtp_port = 587
    sender_email = "saadbintofayeltahsin@gmail.com"
    sender_password = os.environ.get('GMAIL_APP_PASSWORD')
    
    if not sender_password:
        return False
    
    try:
        # Create message
        msg = EmailMessage()
        msg['From'] = sender_email
        msg['To'] = email
        msg['Subject'] = "Thank you for contacting Saad Bin Tofayel Tahsin"
        
        # Email body
        html_body = f"""
        <html>
        <body>
            <h2>Thank you for reaching out!</h2>
            <p>Hi {name},</p>
            <p>Thank you for your message. I've received your inquiry and will get back to you within 24 hours.</p>
            <p>Best regards,<br>Saad Bin Tofayel Tahsin</p>
        </body>
        </html>
        """
        
        msg.set_content(html_body, subtype='html')
        
        # Send email
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(sender_email, sender_password)
        server.send_message(msg)
        server.quit()
        
        print(f"Confirmation email sent successfully to {email}")
        return True
        
    except Exception as e:
        print(f"Gmail SMTP error: {e}")
        return False