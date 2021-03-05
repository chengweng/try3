/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  '__jdu=522361275; shshshfpa=ec251d96-561c-f46d-5bbb-2467fcdf132c-1612409522; shshshfpb=uyHDHHH9MmLUtGcRgqmt1fA%3D%3D; areaId=16; PCSYCityID=CN_350000_350200_350206; ipLoc-djd=16-1303-3483-59780; unpl=V2_ZzNtbRIFQRdzCUABKxxbB2IGQVVLU0VHJ11GVX9NWAVlARpZclRCFnUUR1dnGlkUZwYZXkZcRhNFCEdkeBBVAWMDE1VGZxBFLV0CFSNGF1wjU00zQwBBQHcJFF0uSgwDYgcaDhFTQEJ2XBVQL0oMDDdRFAhyZ0AVRQhHZH8aXwdgAxFbRmdzEkU4dl14EV8AbzMTbUNnAUEpCEFXfB5aSGMAEV9FV0ATcThHZHg%3d; TrackID=16tqZs0D-TvOghB3KW7uvhcjdJNrucZMkEgO9zIFjj8HQIJi5I95lOp76q0_vO9gTo6fDVQPWxwxEJHoSN8A4m_1c-mFR5ikr_gq8QaUu_bw; thor=E77A61A7C2061DE45D836C4445867677775BF03E032548D575839BB8C2664B8F0242B41D2D4252DAE788E7CD0F29259A02EAA075E57A2D2627E5306A7BB84AC8151C8473FE7ADF055B7D2A5B9572AD6A36A464D792D78B7A2E752EA8FF4416A5B478E3FB98F425D6ED64716A3071DDE14F42351AE025203C8C9E9EBFCC13B9D4; pinId=IZ_SM95vsrQTeARHRkZ2xQ; pin=%E5%B5%A9%E7%84%B6%E7%84%B6%E7%84%B6%E7%84%B6; unick=jd_%E9%9D%99%E8%B0%A7; ceshi3.com=201; _tp=odJvT18JAsXlFEyTUtl6DdkPFDNpGaMJlggLK%2F%2Bqs8VkuWHJO9IBAFKgD80G04lT; _pst=%E5%B5%A9%E7%84%B6%E7%84%B6%E7%84%B6%E7%84%B6; __jdv=76161171|baidu-pinzhuan|t_288551095_baidupinzhuan|cpc|0f3d30c8dba7459bb52f2eb5eba8ac7d_0_ac33707da46344b9857ccd105e513395|1614148108532; __jda=122270672.522361275.1612409503.1614063601.1614147948.8; __jdc=122270672; wxa_level=1; cid=9; retina=1; jxsid=16141482565868299162; webp=1; mba_muid=522361275; 3AB9D23F7A4B3C9B=5EEWMCCFVQAY2KZORSIRY5KPZSSSX5HK3SQ666XXQKW4W4XG4MM77J63WXSQ6UJ2WLVA7E3QBSRACEAROIP5NKUORE; TrackerID=DF713Dk0pEVNhFwI5T21MTqBvzDsCesY-7vfpGFLUucvcztRqrmP1tHpDn2XxnLVto-o2iTfwyPnkeHLuBHPv_VHqg0eTjgDhK2CTvZEzW5jdSDcePeKVamRl00jod4GQEILyCV9GJvZhGJzkKAnqw; pt_key=AAJgNfNnADDGNHQxPLM2syqYRSDqlsYgn1EcaPmUK9JBgpwT6kzjyW9QPzdjjK-bguTfz3kfBWA; pt_pin=%E5%B5%A9%E7%84%B6%E7%84%B6%E7%84%B6%E7%84%B6; pt_token=n1sqp7d4; pwdt_id=%E5%B5%A9%E7%84%B6%E7%84%B6%E7%84%B6%E7%84%B6; sfstoken=tk01ma6c51bb4a8sMXgxSllRaUJDQGU5JCwcFK+yYsbs/D6P4qv5x67/beTDhdaDn0grkKEH9ktOTO9+NWYSy0FPwFgM; wqmnx1=MDEyNjM2MnRoLm0vbWllPT16NVAgUE8yayAgVy8uSGxlVm4uaUVhNjNmNGZCS1lDRkYoJQ%3D%3D; visitkey=34275518806865066; __jdb=122270672.8.522361275|8.1614147948; mba_sid=16141482567204190926370859398.3; __wga=1614148457364.1614148457364.1614148457364.1614148457364.1.1; PPRD_P=UUID.522361275; jxsid_s_t=1614148457428; jxsid_s_u=https%3A//home.m.jd.com/myJd/newhome.action; sc_width=414; shshshfp=669e2127b0fedea843bb1e5d46845947; shshshsID=45a2d4987dfe934b5952e00033d1ddcf_4_1614148457650',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
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