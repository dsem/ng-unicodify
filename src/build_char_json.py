import json

TXT_FILE = 'charConversion.txt'
JSON_FILE = 'charConversion.json'

CHARS = {}


def open_file(infile):
    with open(TXT_FILE, 'r') as infile:
        lines = infile.readlines()
    return lines


def save_file(outfile, lines):
    with open(JSON_FILE, 'w') as outfile:
        outfile.writelines(lines)


def parse_line(line):
    line = line.strip()
    char, uni_chars = line.split('|')
    CHARS[char] = [i for i in uni_chars]


if __name__ == '__main__':
    lines = open_file(TXT_FILE)
    for line in lines:
        parse_line(line)
    out_json = json.dumps(CHARS, sort_keys=True, indent=4)
    save_file(JSON_FILE, out_json)
