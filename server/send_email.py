#!/usr/bin/env python3
import argparse
import sys
sys.path.append('server')

from email_service import send_contact_email, send_confirmation_email

def main():
    parser = argparse.ArgumentParser(description='Send contact emails securely')
    parser.add_argument('--name', required=True, help='Sender name')
    parser.add_argument('--email', required=True, help='Sender email')
    parser.add_argument('--message', required=True, help='Message content')
    
    args = parser.parse_args()
    
    try:
        send_contact_email(args.name, args.email, args.message)
        send_confirmation_email(args.name, args.email)
        print("Emails sent successfully")
        sys.exit(0)
    except Exception as e:
        print(f"Email error: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
