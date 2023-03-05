  export const formatTime = (seconds) => {
    if (seconds < 60) {
      return [seconds,`Total Seconds Focused`];
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return [minutes, "Total Minutes Focused"];
    } else {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      return [hours + "." + (minutes < 10 ? "0" : "") + minutes, "Total Hours Focused"];
    }
  };

  
  export const getRegisteredDateString = (user) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    let userRegistered = new Date(user.registered);
    return userRegistered.toLocaleDateString("en-US", options);
  };