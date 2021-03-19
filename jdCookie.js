/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'shshshfpa=de68c813-8fd7-c813-48d5-a33526c5d831-1615165707; shshshfpb=iq726ByvyfQ2kWrqs3yBWbQ==; __jdu=1615165699353388726056; areaId=16; ipLoc-djd=16-1315-0-0; PCSYCityID=CN_350000_350200_0; unpl=V2_ZzNtbUZRRkJ0DhFRL0xZV2IAElVKAxBAfQgWBnwZWANgABANclRCFnUUR1ZnGFUUZwYZXEVcQB1FCEdkeBBVAWMDE1VGZxBFLV0CFSNGF1wjU00zQwBBQHcJFF0uSgwDYgcaDhFTQEJ2XBVQL0oMDDdRFAhyZ0AVRQhHZHseXAFnBBZaSl9BEXcKT119GlsEYwQibUVncyV2CU9ceBpsBFcCIh8WC0cSdA5GUDYZWwVjAxVZRV9LF3EKRF1yH18CZgcVbUNnQA==; __jda=76161171.1615165699353388726056.1615165699.1615165699.1615183536.2; __jdv=76161171|baidu-pinzhuan|t_288551095_baidupinzhuan|cpc|0f3d30c8dba7459bb52f2eb5eba8ac7d_0_574f07f4ed4c42199ebd91ac6157623a|1615183589332; __jdc=76161171; wxa_level=1; cid=9; retina=1; jxsid=16151836006906220752; webp=1; mba_muid=1615165699353388726056; visitkey=7375606188570867; OUTFOX_SEARCH_USER_ID_NCOO=292962363.42505646; 3AB9D23F7A4B3C9B=OXRSQKOFOIRNQ5AYI7HN3XEUNBCA7IWUFJ7BOV3WFAC3M3JPZMCSKA5UKKWEGZNRRUDXGCUNYZZQFXXSADSFBZCC6M; TrackerID=KDQwNNau2ClzvHa3cg_NLv3V-j-i6kWNLdOxWFBx45G_FkzAdtDrXiRJ7B56dr0BIL4ZtSTJSka0eZYgJ6bzQhDa2KSyVVzeRfJ2afsX3502KAiygE0jhp3B0RhVMgESpWSQyDqwIbuwiadYuPwqnQ; pt_key=AAJgRb84ADC1IfZbtjvHnn9-7aL3EhwXy6aFJDndLLwmdwWAFH80J1LS6cIoV9gBzmFQ_Xi3eHo; pt_pin=嵩然然然然; pt_token=ximc9pyw; pwdt_id=嵩然然然然; sfstoken=tk01ma4d61c42a8sMngxeDJ4MU1MTWJSRXt4wZ69ZscrMNJz7ZaX7qDBZIqFeI/NxG+ML7UtUoQhQolEgJvbPwOxQLx2; sc_width=414; PPRD_P=UUID.1615165699353388726056; jxsid_s_u=https://home.m.jd.com/myJd/newhome.action; shshshfp=669e2127b0fedea843bb1e5d46845947; wqmnx1=MDEyNjM1NHNvLm9Kdy5vMzY3TWwwaCBpZTEzZSApbEswMUggIG9yLy5iMThhMDNyMmYtMktXVUkjJigp; __jdb=76161171.10.1615165699353388726056|2.1615183536; mba_sid=16151836010956594769363528261.5; __wga=1615183693865.1615183673512.1615183673512.1615183673512.2.1; jxsid_s_t=1615183693938; shshshsID=268b06b7d3ec9e0b6fa2635c9631bac0_4_1615183694206'
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {女装盲盒抽京豆
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}