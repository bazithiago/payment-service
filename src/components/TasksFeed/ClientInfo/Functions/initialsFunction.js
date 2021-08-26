export default function initials(fullName) {
    let arrName = fullName.split(" ");
    let iniName = fullName.charAt(0);
    let iniLname = arrName[arrName.length - 1].charAt(0);
    return iniName + iniLname;
  }

