# U.S. Treasury Historical Currency Exchange Rates, Quarterly

Quarterly exchange rate data since fiscal year 2001.

https://wgetsnaps.github.io/fiscal.treasury.gov--historical-rates-exchange/fsreports/rpt/treasRptRateExch/historicalRates.htm

Original site here:

https://www.fiscal.treasury.gov/fsreports/rpt/treasRptRateExch/historicalRates.htm


Contains fewer years and less granularity than the U.S. Federal Reserve (which I've [snapshotted here](https://github.com/wgetsnaps/federalreserve.gov--foreign-exchange-rates-h10)), but has far more currencies and countries.




```
wget --page-requisites \
     --adjust-extension \
     --convert-links \
     --backup-converted \
     --recursive --level 1 \
     --no-parent \
     --no-host-directories \
     https://www.fiscal.treasury.gov/fsreports/rpt/treasRptRateExch/historicalRates.htm |
     tee ./wget.log
```
