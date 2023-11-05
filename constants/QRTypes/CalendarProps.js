import React from "react";
import { calcWidth } from "../../helper/res";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const CalendarProps = {
  icon: <AntDesign name="calendar" size={calcWidth(10)} color="#008080" />,
  componentProps: {
    fields: [
      {
        name: "eventName",
        placeholder: "Event Name",
        type: "text",
        icon: <MaterialIcons name="event" size={calcWidth(8)} color="black" />,
      },
      {
        name: "eventDate",
        placeholder: "Event Date (YYYY-MM-DD)",
        type: "text",
        icon: (
          <MaterialIcons name="date-range" size={calcWidth(8)} color="black" />
        ),
      },
      {
        name: "eventTime",
        placeholder: "Event Time (HH:MM)",
        type: "text",
        icon: (
          <MaterialIcons name="access-time" size={calcWidth(8)} color="black" />
        ),
      },
      {
        name: "eventLocation",
        placeholder: "Event Location (optional)",
        type: "text",
        icon: (
          <MaterialIcons name="location-on" size={calcWidth(8)} color="black" />
        ),
        optional: true,
      },
    ],
    generateQRContent: ({ eventName, eventDate, eventTime, eventLocation }) => {
      const eventText = `BEGIN:VEVENT
DTSTART:${eventDate}T${eventTime}
SUMMARY:${eventName}
${eventLocation ? `LOCATION:${eventLocation}` : ""}
END:VEVENT`;

      return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Your Company//Your App//EN
${eventText}
END:VCALENDAR`;
    },
  },
};

export default CalendarProps;
