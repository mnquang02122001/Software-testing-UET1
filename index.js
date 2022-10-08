function getScholarship(year, gpa, ielts) {
  if (
    year < 1 ||
    year > 4 ||
    gpa < 0.0 ||
    gpa > 4.0 ||
    ielts < 0.0 ||
    ielts > 9.0
  ) {
    return 'Không hợp lệ';
  }
  if (year == 1 || year == 4 || gpa < 3.2 || ielts < 6.5) {
    return 'Không được học bổng';
  }
  if (gpa < 3.6) {
    return 'Học bổng 50%';
  } else {
    return 'Học bổng 100%';
  }
}

module.exports = getScholarship;
