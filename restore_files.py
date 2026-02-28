import os

def restore_file(filepath):
    print(f"Restoring {filepath}...")
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read().strip()
        
        # Split by space and convert each code to a character
        codes = content.split(' ')
        decoded_content = "".join(chr(int(code)) for code in codes if code.isdigit())
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(decoded_content)
        print(f"Successfully restored {filepath}")
    except Exception as e:
        print(f"Error restoring {filepath}: {e}")

files_to_restore = [
    r"c:\xampp\htdocs\naggystore\buytuns\admin.html",
    r"c:\xampp\htdocs\naggystore\buytuns\client.html"
]

for file in files_to_restore:
    if os.path.exists(file):
        restore_file(file)
    else:
        print(f"File not found: {file}")
