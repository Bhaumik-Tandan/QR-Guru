const regexPatterns = {
    Website: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
    Email: /\S+@\S+\.\S+/,
    Facebook: /^https:\/\/www\.facebook\.com\/(.*?)\/$/,
    Instagram: /^https:\/\/www\.instagram\.com\/(.*?)\/$/,
    Twitter: /^https:\/\/twitter\.com\/(.*?)\/$/,
    Youtube: /^https:\/\/www\.youtube\.com\/(.*?)\/$/,
    Linkedin: /^https:\/\/www\.linkedin\.com\/(.*?)\/$/,
  };
  
  const checkRegex = (text, regex) => regex.test(text);
  
  const textType = (text) => {
    for (const [type, regex] of Object.entries(regexPatterns)) {
      if (checkRegex(text, regex)) {
        return type.charAt(0).toUpperCase() + type.slice(1);
      }
    }
    return "Text";
  };

  
export default textType;