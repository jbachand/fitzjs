import moment;

exports.fitzjs = (dateString) => {
    return moment(dateString).toIsoString();
}