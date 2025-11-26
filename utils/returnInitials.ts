export function returnInitials (words: Array<string>, uppercase: boolean = true) {
    const initials
      = (words.length > 0 ? words.map(word => word.charAt(0) || "") : []) || [];
    const initialsStr = initials.join("") || "";
  
    return uppercase ? initialsStr.toUpperCase() : initialsStr;
  }
  