export function returnInitials (words: Array<string>, uppercase: boolean = true) {
    // name is supplied as a single full name
    if (words.length === 1 && words[0]) {
      const initials = words[0].split(' ').map(word => {
        return word.charAt(0)
      });
      const initialsStr = initials.join("") || "";
    return uppercase ? initialsStr.toUpperCase() : initialsStr; 
    } 
    // name is supplied in segments, i.e. firstname, lastname
    else {
      const initials
      = (words.length > 0 ? words.map(word => word.charAt(0) || "") : []) || [];
    const initialsStr = initials.join("") || "";
    return uppercase ? initialsStr.toUpperCase() : initialsStr;
    }
  }
  