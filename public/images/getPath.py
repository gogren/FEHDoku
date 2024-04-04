import os
import urllib.parse

def find_files(directory, filename):
    file_paths = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file == filename:
                # Get relative path from the "Heroes" directory
                rel_path = os.path.relpath(root, directory)
                # Replace spaces with %20 and append file name
                encoded_rel_path = urllib.parse.quote(rel_path)
                file_paths.append(os.path.join(encoded_rel_path, file))
    return file_paths

directory = "Tokyo"
filename = "Face_FC.png"
current_directory = os.path.abspath(os.path.dirname(__file__))  # Assuming you're running this script
directory_path = os.path.join(current_directory, directory)
file_paths = find_files(directory_path, filename)


# {name: "", origin: 0, moveType: '', weapon: '', color: '', rarity: [], skills: [], img: ""},
for path in file_paths:
    parts = path.split('/')
    print("{name: '"+parts[0] + "',","origin: 14, moveType: '', weapon: '', color: '', rarity: [], skills: [], img:", "'/Tokyo/"+path +"'},")
