function bigIntToString(value: any) {
  const MAX_SAFE_INTEGER = 2 ** 53 - 1;
  return value <= MAX_SAFE_INTEGER ? Number(value) : value.toString();
}

export const getValueBigintId = (instantReports: any) => {
  return instantReports.map((report: { id: any; ShopProducts: any }) => {
    const newReport = { ...report };
    if (typeof report.id === "bigint") newReport.id = bigIntToString(report.id);
    if (report.ShopProducts) {
      getValueBigintId(report.ShopProducts);
    }
    return newReport;
  });
};
