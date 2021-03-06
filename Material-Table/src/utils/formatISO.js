"use strict";

function toDate(argument) {
  (0, _indexFormatISOEachDayOfInterval.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if (
      (typeof argument === "string" || argStr === "[object String]") &&
      typeof console !== "undefined"
    ) {
      // eslint-disable-next-line no-console
      console.warn(
        "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"
      ); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(
      required +
        " argument" +
        (required > 1 ? "s" : "") +
        " required, but only " +
        args.length +
        " present"
    );
  }
}

function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? "-" : "";
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = "0" + output;
  }

  return sign + output;
}
var _indexFormatISO = _interopRequireDefault(toDate);

var _indexFormatISO2 = _interopRequireDefault(addLeadingZeros);

var _indexFormatISO3 = _interopRequireDefault(requiredArgs);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * @name formatISO
 * @category Common Helpers
 * @summary Format the date according to the ISO 8601 standard (https://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm).
 *
 * @description
 * Return the formatted date string in ISO 8601 format. Options may be passed to control the parts and notations of the date.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {'extended'|'basic'} [options.format='extended'] - if 'basic', hide delimiters between date and time values.
 * @param {'complete'|'date'|'time'} [options.representation='complete'] - format date, time with local time zone, or both.
 * @returns {String} the formatted date string (in local time zone)
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.format` must be 'extended' or 'basic'
 * @throws {RangeError} `options.represenation` must be 'date', 'time' or 'complete'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601, short format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
 * //=> '20190918T190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, date only:
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, time only (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
 * //=> '19:00:52Z'
 */
function formatISO(date, options) {
  (0, _indexFormatISO3.default)(1, arguments);
  var originalDate = (0, _indexFormatISO.default)(date);

  if (isNaN(originalDate.getTime())) {
    throw new RangeError("Invalid time value");
  }

  var format = !(options !== null && options !== void 0 && options.format)
    ? "extended"
    : String(options.format);
  var representation = !(
    options !== null &&
    options !== void 0 &&
    options.representation
  )
    ? "complete"
    : String(options.representation);

  if (format !== "extended" && format !== "basic") {
    throw new RangeError("format must be 'extended' or 'basic'");
  }

  if (
    representation !== "date" &&
    representation !== "time" &&
    representation !== "complete"
  ) {
    throw new RangeError(
      "representation must be 'date', 'time', or 'complete'"
    );
  }

  var result = "";
  var tzOffset = "";
  var dateDelimiter = format === "extended" ? "-" : "";
  var timeDelimiter = format === "extended" ? ":" : ""; // Representation is either 'date' or 'complete'

  if (representation !== "time") {
    var day = (0, _indexFormatISO2.default)(originalDate.getDate(), 2);
    var month = (0, _indexFormatISO2.default)(originalDate.getMonth() + 1, 2);
    var year = (0, _indexFormatISO2.default)(originalDate.getFullYear(), 4); // yyyyMMdd or yyyy-MM-dd.

    result = ""
      .concat(year)
      .concat(dateDelimiter)
      .concat(month)
      .concat(dateDelimiter)
      .concat(day);
  } // Representation is either 'time' or 'complete'

  if (representation !== "date") {
    // Add the timezone.
    var offset = originalDate.getTimezoneOffset();

    if (offset !== 0) {
      var absoluteOffset = Math.abs(offset);
      var hourOffset = (0, _indexFormatISO2.default)(
        Math.floor(absoluteOffset / 60),
        2
      );
      var minuteOffset = (0, _indexFormatISO2.default)(absoluteOffset % 60, 2); // If less than 0, the sign is +, because it is ahead of time.

      var sign = offset < 0 ? "+" : "-";
      tzOffset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
    } else {
      tzOffset = "Z";
    }

    var hour = (0, _indexFormatISO2.default)(originalDate.getHours(), 2);
    var minute = (0, _indexFormatISO2.default)(originalDate.getMinutes(), 2);
    var second = (0, _indexFormatISO2.default)(originalDate.getSeconds(), 2); // If there's also date, separate it with time with 'T'

    var separator = result === "" ? "" : "T"; // Creates a time string consisting of hour, minute, and second, separated by delimiters, if defined.

    var time = [hour, minute, second].join(timeDelimiter); // HHmmss or HH:mm:ss.

    result = "".concat(result).concat(separator).concat(time).concat(tzOffset);
  }

  return result;
}
