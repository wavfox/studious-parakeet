/*
import dateFnsParse from "date-fns/parse"; //this is parse in dateFns

import defaultLocale from "date-fns/locale/en-US";
*/

const dateFnsParse = dateFns.parse;

const defaultFormats = {
  dayOfMonth: "d",
  fullDate: "PP",
  fullDateWithWeekday: "PPPP",
  fullDateTime: "PP p",
  fullDateTime12h: "PP hh:mm aaa",
  fullDateTime24h: "PP HH:mm",
  fullTime: "p",
  fullTime12h: "hh:mm aaa",
  fullTime24h: "HH:mm",
  hours12h: "hh",
  hours24h: "HH",
  keyboardDate: "P",
  keyboardDateTime: "P p",
  keyboardDateTime12h: "P hh:mm aaa",
  keyboardDateTime24h: "P HH:mm",
  minutes: "mm",
  month: "LLLL",
  monthAndDate: "MMMM d",
  monthAndYear: "LLLL yyyy",
  monthShort: "MMM",
  weekday: "EEEE",
  weekdayShort: "EEE",
  normalDate: "d MMMM",
  normalDateWithWeekday: "EEE, MMM d",
  seconds: "ss",
  shortDate: "MMM d",
  year: "yyyy",
};
class DateFnsUtils {
  constructor({ locale, formats } = {}) {
    this.lib = "date-fns";
    // Note: date-fns input types are more lenient than this adapter, so we need to expose our more
    // strict signature and delegate to the more lenient signature. Otherwise, we have downstream type errors upon usage.
    this.is12HourCycleInCurrentLocale = () => {
      if (this.locale) {
        return /a/.test(this.locale.formatLong.time());
      }
      // By default date-fns is using en-US locale with am/pm enabled
      return true;
    };
    this.getFormatHelperText = (format) => {
      // @see https://github.com/date-fns/date-fns/blob/master/src/format/index.js#L31
      const longFormatRegexp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
      const locale = this.locale || defaultLocale;
      return format
        .match(longFormatRegexp)
        .map((token) => {
          const firstCharacter = token[0];
          if (firstCharacter === "p" || firstCharacter === "P") {
            const longFormatter = longFormatters[firstCharacter];
            return longFormatter(token, locale.formatLong, {});
          }
          return token;
        })
        .join("")
        .replace(/(aaa|aa|a)/g, "(a|p)m")
        .toLocaleLowerCase();
    };
    this.parseISO = (isoString) => {
      return parseISO(isoString);
    };
    this.toISO = (value) => {
      return formatISO(value, { format: "extended" });
    };
    this.getCurrentLocaleCode = () => {
      var _a;
      return (
        ((_a = this.locale) === null || _a === void 0 ? void 0 : _a.code) ||
        "en-US"
      );
    };
    this.addSeconds = (value, count) => {
      return addSeconds(value, count);
    };
    this.addMinutes = (value, count) => {
      return addMinutes(value, count);
    };
    this.addHours = (value, count) => {
      return addHours(value, count);
    };
    this.addDays = (value, count) => {
      return addDays(value, count);
    };
    this.addWeeks = (value, count) => {
      return addWeeks(value, count);
    };
    this.addMonths = (value, count) => {
      return addMonths(value, count);
    };
    this.isValid = (value) => {
      return isValid(this.date(value));
    };
    this.getDiff = (value, comparing, unit) => {
      switch (unit) {
        case "years":
          return differenceInYears(value, this.date(comparing));
        case "quarters":
          return differenceInQuarters(value, this.date(comparing));
        case "months":
          return differenceInMonths(value, this.date(comparing));
        case "weeks":
          return differenceInWeeks(value, this.date(comparing));
        case "days":
          return differenceInDays(value, this.date(comparing));
        case "hours":
          return differenceInHours(value, this.date(comparing));
        case "minutes":
          return differenceInMinutes(value, this.date(comparing));
        case "seconds":
          return differenceInSeconds(value, this.date(comparing));
        default: {
          return differenceInMilliseconds(value, this.date(comparing));
        }
      }
    };
    this.isAfter = (value, comparing) => {
      return isAfter(value, comparing);
    };
    this.isBefore = (value, comparing) => {
      return isBefore(value, comparing);
    };
    this.startOfDay = (value) => {
      return startOfDay(value);
    };
    this.endOfDay = (value) => {
      return endOfDay(value);
    };
    this.getHours = (value) => {
      return getHours(value);
    };
    this.setHours = (value, count) => {
      return setHours(value, count);
    };
    this.setMinutes = (value, count) => {
      return setMinutes(value, count);
    };
    this.getSeconds = (value) => {
      return getSeconds(value);
    };
    this.setSeconds = (value, count) => {
      return setSeconds(value, count);
    };
    this.isSameDay = (value, comparing) => {
      return isSameDay(value, comparing);
    };
    this.isSameMonth = (value, comparing) => {
      return isSameMonth(value, comparing);
    };
    this.isSameYear = (value, comparing) => {
      return isSameYear(value, comparing);
    };
    this.isSameHour = (value, comparing) => {
      return isSameHour(value, comparing);
    };
    this.startOfMonth = (value) => {
      return startOfMonth(value);
    };
    this.endOfMonth = (value) => {
      return endOfMonth(value);
    };
    this.startOfWeek = (value) => {
      return startOfWeek(value, { locale: this.locale });
    };
    this.endOfWeek = (value) => {
      return endOfWeek(value, { locale: this.locale });
    };
    this.getYear = (value) => {
      return getYear(value);
    };
    this.setYear = (value, count) => {
      return setYear(value, count);
    };
    this.date = (value) => {
      if (typeof value === "undefined") {
        return new Date();
      }
      if (value === null) {
        return null;
      }
      return new Date(value);
    };
    this.toJsDate = (value) => {
      return value;
    };
    this.parse = (value, formatString) => {
      if (value === "") {
        return null;
      }
      return dateFnsParse(value, formatString, new Date(), {
        locale: this.locale,
      });
    };
    this.format = (date, formatKey) => {
      return this.formatByString(date, this.formats[formatKey]);
    };
    this.formatByString = (date, formatString) => {
      return format(date, formatString, { locale: this.locale });
    };
    this.isEqual = (date, comparing) => {
      if (date === null && comparing === null) {
        return true;
      }
      return isEqual(date, comparing);
    };
    this.isNull = (date) => {
      return date === null;
    };
    this.isAfterDay = (date, value) => {
      return isAfter(date, endOfDay(value));
    };
    this.isBeforeDay = (date, value) => {
      return isBefore(date, startOfDay(value));
    };
    this.isBeforeYear = (date, value) => {
      return isBefore(date, startOfYear(value));
    };
    this.isAfterYear = (date, value) => {
      return isAfter(date, endOfYear(value));
    };
    this.isWithinRange = (date, [start, end]) => {
      return isWithinInterval(date, { start, end });
    };
    this.formatNumber = (numberToFormat) => {
      return numberToFormat;
    };
    this.getMinutes = (date) => {
      return date.getMinutes();
    };
    this.getMonth = (date) => {
      return date.getMonth();
    };
    this.getDaysInMonth = (date) => {
      return getDaysInMonth(date);
    };
    this.setMonth = (date, count) => {
      return setMonth(date, count);
    };
    this.getMeridiemText = (ampm) => {
      return ampm === "am" ? "AM" : "PM";
    };
    this.getNextMonth = (date) => {
      return addMonths(date, 1);
    };
    this.getPreviousMonth = (date) => {
      return addMonths(date, -1);
    };
    this.getMonthArray = (date) => {
      const firstMonth = startOfYear(date);
      const monthArray = [firstMonth];
      while (monthArray.length < 12) {
        const prevMonth = monthArray[monthArray.length - 1];
        monthArray.push(this.getNextMonth(prevMonth));
      }
      return monthArray;
    };
    this.mergeDateAndTime = (date, time) => {
      return this.setSeconds(
        this.setMinutes(
          this.setHours(date, this.getHours(time)),
          this.getMinutes(time)
        ),
        this.getSeconds(time)
      );
    };
    this.getWeekdays = () => {
      const now = new Date();
      return eachDayOfInterval({
        start: startOfWeek(now, { locale: this.locale }),
        end: endOfWeek(now, { locale: this.locale }),
      }).map((day) => this.formatByString(day, "EEEEEE"));
    };
    this.getWeekArray = (date) => {
      const start = startOfWeek(startOfMonth(date), { locale: this.locale });
      const end = endOfWeek(endOfMonth(date), { locale: this.locale });
      let count = 0;
      let current = start;
      const nestedWeeks = [];
      let lastDay = null;
      while (isBefore(current, end)) {
        const weekNumber = Math.floor(count / 7);
        nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
        const day = getDay(current);
        if (lastDay !== day) {
          lastDay = day;
          nestedWeeks[weekNumber].push(current);
          count += 1;
        }
        current = addDays(current, 1);
      }
      return nestedWeeks;
    };
    this.getYearRange = (start, end) => {
      const startDate = startOfYear(start);
      const endDate = endOfYear(end);
      const years = [];
      let current = startDate;
      while (isBefore(current, endDate)) {
        years.push(current);
        current = addYears(current, 1);
      }
      return years;
    };
    this.locale = locale;
    this.formats = Object.assign({}, defaultFormats, formats);
  }
}
