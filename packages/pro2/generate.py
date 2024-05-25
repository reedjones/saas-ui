from pathlib import Path
import os
import subprocess

cur = Path.cwd()
pathto1 = cur / "saas-ui/pro/src"
pathto = cur / "packages/ui-lib/src"

files = os.listdir(pathto)


def get_file_path(p):
    return Path(pathto / p).relative_to(cur).as_posix()

def get_cmd(pt):
    return f"bit add ./{str(pt)}"


def main():
    trun = True

    for file in files:

        pt = get_file_path(file)
        cmd = get_cmd(pt)
        print(cmd.split(" "))
        output = subprocess.run(cmd, capture_output = True, shell=True)
        print(output)
        if trun:
            c = input("continue?") == 'y'
            if c:
                trun = False
            else:
                exit()


if __name__ == "__main__":
    main()