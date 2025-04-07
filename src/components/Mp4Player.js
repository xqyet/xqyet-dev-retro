import React, { useRef, useState, useEffect } from 'react';
import { Modal, Frame, Button } from '@react95/core';
import styled from 'styled-components';

// **Use Cloudinary or Firebase MP4 URLs**
const videoFiles = [
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044341/1.30.25_42_hudcan.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044335/unknown_From_your_contacts_survivinganotherday__360_hpyivo.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044334/2.18.25_40_hb2q5p.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044340/unknown_From_your_contacts_survivinganotherday__327_cxhtmk.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044335/unknown_From_your_contacts_survivinganotherday__337_t4tglc.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044335/unknown_From_your_contacts_survivinganotherday__333_dxmdkd.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044334/2.18.25_59_oaun3w.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044334/unknown_From_your_contacts_survivinganotherday__310_hezcqw.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044334/unknown_From_your_contacts_survivinganotherday__304_u9fnuk.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044332/2.18.25_12_wq8quv.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044330/unknown_From_your_contacts_survivinganotherday__102_ut8fpj.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044331/2.18.25_64_ay7mme.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044332/unknown_From_your_contacts_survivinganotherday__139_bdq6ch.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044329/2.1.2025_1_jhmxgm.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044327/2.4.2025_9_nwlcbh.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044324/unknown_From_your_contacts_survivinganotherday__368_nm7yvh.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044328/unknown_From_your_contacts_survivinganotherday__104_qk4pb5.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044326/unknown_From_your_contacts_survivinganotherday__370_yfrqsv.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044326/You_relate_to_this_I_know_you_do.Anyways_this_post_is_purely_a_test_song_is_mine_tho25-00_-_shokupan_hatsunemiku_miku_vocaloid_kasaneteto_qqi7wz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044325/unknown_From_your_contacts_survivinganotherday__369_wnyy8m.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044325/what_did_Megamind_do_megamind_megamindmovie_megamindedit_megamindmemes_badending_badendings_brainrot_dreamworks_dreamworksanimation_sadart_sniper_360noscope_comic_comicart_u53kwn.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044322/unknown_From_your_contacts_survivinganotherday__363_xafgte.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044324/unknown_From_your_contacts_survivinganotherday__367_vhtidq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044322/unknown_From_your_contacts_survivinganotherday__361_ni6zbm.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044324/unknown_From_your_contacts_survivinganotherday__366_hxl3vg.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044323/unknown_From_your_contacts_survivinganotherday__359_w3ezxb.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044322/unknown_From_your_contacts_survivinganotherday__364_ybaiat.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044319/unknown_From_your_contacts_survivinganotherday__357_lupklf.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044317/unknown_From_your_contacts_survivinganotherday__353_xptbj7.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044318/unknown_From_your_contacts_survivinganotherday__356_nv3xla.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044320/unknown_From_your_contacts_survivinganotherday__358_zk11i6.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044317/unknown_From_your_contacts_survivinganotherday__355_j7kjf3.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044317/unknown_From_your_contacts_survivinganotherday__354_sozlp4.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044316/unknown_From_your_contacts_survivinganotherday__351_ljrlp3.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044315/unknown_From_your_contacts_survivinganotherday__350_dshkra.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044314/2.18.25_62_qv5gos.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044313/unknown_From_your_contacts_survivinganotherday__348_i5svrc.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044315/unknown_From_your_contacts_survivinganotherday__352_mmelxu.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044313/unknown_From_your_contacts_survivinganotherday__349_vx8yny.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044312/unknown_From_your_contacts_survivinganotherday__345_lpsyal.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044312/unknown_From_your_contacts_survivinganotherday__347_s713v5.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044309/unknown_From_your_contacts_survivinganotherday__341_td6kk2.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044311/unknown_From_your_contacts_survivinganotherday__346_m1xqwl.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044311/unknown_From_your_contacts_survivinganotherday__344_wknor0.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044310/unknown_From_your_contacts_survivinganotherday__343_iy6yz7.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044309/unknown_From_your_contacts_survivinganotherday__340_qfrnbp.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044308/unknown_From_your_contacts_survivinganotherday__338_a8vgdp.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044308/unknown_From_your_contacts_survivinganotherday__342_cwli1w.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044307/unknown_From_your_contacts_survivinganotherday__336_orzzoy.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044306/unknown_From_your_contacts_survivinganotherday__335_ztfxtp.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044306/unknown_From_your_contacts_survivinganotherday__334_friwzr.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044306/unknown_From_your_contacts_survivinganotherday__332_lbycmm.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044303/unknown_From_your_contacts_survivinganotherday__330_va9mvi.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044303/unknown_From_your_contacts_survivinganotherday__328_ambsdk.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044303/unknown_From_your_contacts_survivinganotherday__329_x7oltq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044303/unknown_From_your_contacts_survivinganotherday__331_erias6.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044300/unknown_From_your_contacts_survivinganotherday__323_m6wipk.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044301/unknown_From_your_contacts_survivinganotherday__326_krobah.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044301/unknown_From_your_contacts_survivinganotherday__325_oeqalk.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044299/unknown_From_your_contacts_survivinganotherday__322_ndesb5.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044300/unknown_From_your_contacts_survivinganotherday__324_tunk3m.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044297/unknown_From_your_contacts_survivinganotherday__321_kfip0e.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044296/unknown_From_your_contacts_survivinganotherday__320_ospfqp.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044296/unknown_From_your_contacts_survivinganotherday__319_dvrixz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044295/unknown_From_your_contacts_survivinganotherday__318_iadayt.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044294/unknown_From_your_contacts_survivinganotherday__317_mdvayr.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044292/unknown_From_your_contacts_survivinganotherday__312_vlct76.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044293/unknown_From_your_contacts_survivinganotherday__314_yv1wvu.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044293/unknown_From_your_contacts_survivinganotherday__316_n1zrri.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044293/unknown_From_your_contacts_survivinganotherday__315_xyq9w7.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044292/unknown_From_your_contacts_survivinganotherday__313_wibchf.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044292/unknown_From_your_contacts_survivinganotherday__309_imzyim.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044288/unknown_From_your_contacts_survivinganotherday__305_ohulrt.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044289/unknown_From_your_contacts_survivinganotherday__307_tpnfs4.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044290/unknown_From_your_contacts_survivinganotherday__306_pakvaw.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044289/unknown_From_your_contacts_survivinganotherday__308_a7m98o.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044290/unknown_From_your_contacts_survivinganotherday__311_mqzntq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044286/unknown_From_your_contacts_survivinganotherday__299_xzgabt.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044287/unknown_From_your_contacts_survivinganotherday__302_df96jj.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044287/unknown_From_your_contacts_survivinganotherday__301_kopwa3.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044287/unknown_From_your_contacts_survivinganotherday__303_tkuwkq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044286/2.18.25_63_q498xb.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044286/unknown_From_your_contacts_survivinganotherday__300_kkahvt.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044284/unknown_From_your_contacts_survivinganotherday__298_pjn8oe.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044284/unknown_From_your_contacts_survivinganotherday__293_a0s1ay.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044283/unknown_From_your_contacts_survivinganotherday__295_hfiogr.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044284/unknown_From_your_contacts_survivinganotherday__297_yyz9ev.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044283/unknown_From_your_contacts_survivinganotherday__296_jgwy8t.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044283/unknown_From_your_contacts_survivinganotherday__291_qzhhcu.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044283/unknown_From_your_contacts_survivinganotherday__294_b5oxep.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044282/unknown_From_your_contacts_survivinganotherday__292_gptqfh.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044281/unknown_From_your_contacts_survivinganotherday__282_n9fted.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044282/unknown_From_your_contacts_survivinganotherday__290_r45hby.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044281/unknown_From_your_contacts_survivinganotherday__288_dxhvkc.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044281/unknown_From_your_contacts_survivinganotherday__289_emuqvk.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044279/unknown_From_your_contacts_survivinganotherday__281_ay5mtf.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044281/unknown_From_your_contacts_survivinganotherday__287_r2zqyh.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044280/unknown_From_your_contacts_survivinganotherday__286_utdnoj.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044280/unknown_From_your_contacts_survivinganotherday__284_bddnoz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044280/unknown_From_your_contacts_survivinganotherday__285_xlhafu.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044280/unknown_From_your_contacts_survivinganotherday__283_j2svdm.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044279/unknown_From_your_contacts_survivinganotherday__280_q4rght.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044275/unknown_From_your_contacts_survivinganotherday__272_s3xdtg.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044278/unknown_From_your_contacts_survivinganotherday__279_efqq2q.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044277/unknown_From_your_contacts_survivinganotherday__277_ged4x4.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044277/unknown_From_your_contacts_survivinganotherday__276_pyovcb.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044278/unknown_From_your_contacts_survivinganotherday__278_rsdhaz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044275/unknown_From_your_contacts_survivinganotherday__273_l4ozin.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044276/unknown_From_your_contacts_survivinganotherday__275_monjj7.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044276/unknown_From_your_contacts_survivinganotherday__271_nxqy28.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044276/unknown_From_your_contacts_survivinganotherday__274_w0ud1n.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044275/unknown_From_your_contacts_survivinganotherday__270_v1agtz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044275/unknown_From_your_contacts_survivinganotherday__269_thd6gp.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044275/unknown_From_your_contacts_survivinganotherday__268_znqv3a.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044274/unknown_From_your_contacts_survivinganotherday__266_glyahc.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044274/unknown_From_your_contacts_survivinganotherday__267_jyuzp5.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044273/unknown_From_your_contacts_survivinganotherday__263_iqfmpi.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044273/unknown_From_your_contacts_survivinganotherday__265_b1wohp.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044273/unknown_From_your_contacts_survivinganotherday__264_hzk0sf.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044273/unknown_From_your_contacts_survivinganotherday__262_at16w3.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044273/unknown_From_your_contacts_survivinganotherday__261_yiuash.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044272/unknown_From_your_contacts_survivinganotherday__260_err90n.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044272/unknown_From_your_contacts_survivinganotherday__258_coa76o.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044272/unknown_From_your_contacts_survivinganotherday__259_uuwfss.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044272/unknown_From_your_contacts_survivinganotherday__257_dlgg23.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044272/unknown_From_your_contacts_survivinganotherday__255_kj0lfi.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044272/unknown_From_your_contacts_survivinganotherday__256_nh0duv.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044271/unknown_From_your_contacts_survivinganotherday__254_je3ztz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044271/unknown_From_your_contacts_survivinganotherday__253_v1mfb9.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044270/unknown_From_your_contacts_survivinganotherday__248_h5e911.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044270/unknown_From_your_contacts_survivinganotherday__250_ajevhn.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044270/unknown_From_your_contacts_survivinganotherday__246_aupmlp.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044270/unknown_From_your_contacts_survivinganotherday__249_ahirp9.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044270/unknown_From_your_contacts_survivinganotherday__247_oit0gt.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044269/unknown_From_your_contacts_survivinganotherday__245_fhkhfn.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044269/unknown_From_your_contacts_survivinganotherday__242_ovrwpo.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044269/unknown_From_your_contacts_survivinganotherday__244_tq0x1p.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044269/unknown_From_your_contacts_survivinganotherday__243_njrw6g.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044264/unknown_From_your_contacts_survivinganotherday__229_umpjki.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044268/unknown_From_your_contacts_survivinganotherday__241_jnn5g6.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044268/unknown_From_your_contacts_survivinganotherday__240_osus7k.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044268/unknown_From_your_contacts_survivinganotherday__239_grtruy.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044267/unknown_From_your_contacts_survivinganotherday__237_a5ckyv.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044267/unknown_From_your_contacts_survivinganotherday__238_rn8inv.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044266/unknown_From_your_contacts_survivinganotherday__233_smyben.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044266/unknown_From_your_contacts_survivinganotherday__235_czxgzj.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044266/unknown_From_your_contacts_survivinganotherday__236_r3ygho.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044266/unknown_From_your_contacts_survivinganotherday__234_owanya.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044265/unknown_From_your_contacts_survivinganotherday__232_eeqdda.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044265/unknown_From_your_contacts_survivinganotherday__226_uce3ip.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044265/unknown_From_your_contacts_survivinganotherday__230_g8dfy5.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044264/unknown_From_your_contacts_survivinganotherday__231_y4888g.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044263/unknown_From_your_contacts_survivinganotherday__228_eablh0.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044263/unknown_From_your_contacts_survivinganotherday__223_dqnzm7.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044263/unknown_From_your_contacts_survivinganotherday__227_i7ls1i.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044262/unknown_From_your_contacts_survivinganotherday__225_usaziq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044261/unknown_From_your_contacts_survivinganotherday__222_b1uhf8.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044262/unknown_From_your_contacts_survivinganotherday__224_h8rvkb.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044261/unknown_From_your_contacts_survivinganotherday__221_mpqcjc.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044261/2.18.25_42_wcpvb8.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044261/unknown_From_your_contacts_survivinganotherday__214_o3czfk.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044260/unknown_From_your_contacts_survivinganotherday__220_dh8bjw.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044260/unknown_From_your_contacts_survivinganotherday__219_yx3exp.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044260/unknown_From_your_contacts_survivinganotherday__218_jayjsm.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044259/unknown_From_your_contacts_survivinganotherday__216_egerpf.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044259/unknown_From_your_contacts_survivinganotherday__217_mmv4q1.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044258/unknown_From_your_contacts_survivinganotherday__215_lvcnqw.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044258/unknown_From_your_contacts_survivinganotherday__211_iqtguq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044258/unknown_From_your_contacts_survivinganotherday__210_fk0pfq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044258/unknown_From_your_contacts_survivinganotherday__213_hfr1pf.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044257/unknown_From_your_contacts_survivinganotherday__212_xxlyj7.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044257/unknown_From_your_contacts_survivinganotherday__207_enuze3.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044256/unknown_From_your_contacts_survivinganotherday__202_i8w2z9.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044257/unknown_From_your_contacts_survivinganotherday__209_brrkf8.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044256/unknown_From_your_contacts_survivinganotherday__208_dakj9d.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044256/unknown_From_your_contacts_survivinganotherday__206_j0dr8q.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044256/unknown_From_your_contacts_survivinganotherday__205_u6fkh4.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044256/unknown_From_your_contacts_survivinganotherday__204_lcuafw.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044255/unknown_From_your_contacts_survivinganotherday__203_w2drvp.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044255/unknown_From_your_contacts_survivinganotherday__201_wv1h9s.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044254/unknown_From_your_contacts_survivinganotherday__197_p1lvh4.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044254/unknown_From_your_contacts_survivinganotherday__200_s8nwdq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044254/unknown_From_your_contacts_survivinganotherday__193_ubqv7d.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044254/unknown_From_your_contacts_survivinganotherday__199_ooudf9.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044254/unknown_From_your_contacts_survivinganotherday__198_fm3g1p.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044251/unknown_From_your_contacts_survivinganotherday__186_nl9wrq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044253/unknown_From_your_contacts_survivinganotherday__191_b13cjf.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044253/unknown_From_your_contacts_survivinganotherday__189_nkotrj.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044253/unknown_From_your_contacts_survivinganotherday__195_uo97ba.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044252/unknown_From_your_contacts_survivinganotherday__194_kbvbe5.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044252/unknown_From_your_contacts_survivinganotherday__192_r4osze.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044251/unknown_From_your_contacts_survivinganotherday__190_duemzo.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044251/unknown_From_your_contacts_survivinganotherday__187_fxkmwi.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044251/unknown_From_your_contacts_survivinganotherday__188_dzhibp.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044249/2.18.25_34_pzapxn.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044249/unknown_From_your_contacts_survivinganotherday__184_qgcyrb.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044249/unknown_From_your_contacts_survivinganotherday__182_uhcebl.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044249/unknown_From_your_contacts_survivinganotherday__185_tr89cu.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044249/unknown_From_your_contacts_survivinganotherday__183_b0xoka.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044249/unknown_From_your_contacts_survivinganotherday__176_vejk7i.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044248/unknown_From_your_contacts_survivinganotherday__181_bteja9.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044248/unknown_From_your_contacts_survivinganotherday__179_oz0n5q.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044248/unknown_From_your_contacts_survivinganotherday__180_apjsfb.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044248/unknown_From_your_contacts_survivinganotherday__178_pgh31o.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044247/unknown_From_your_contacts_survivinganotherday__177_yuoerv.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044247/unknown_From_your_contacts_survivinganotherday__174_eezpx9.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044247/unknown_From_your_contacts_survivinganotherday__175_eedd9k.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044247/unknown_From_your_contacts_survivinganotherday__172_m9hwti.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044246/unknown_From_your_contacts_survivinganotherday__173_enjxqe.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044246/unknown_From_your_contacts_survivinganotherday__161_adczzo.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044246/unknown_From_your_contacts_survivinganotherday__171_aujya0.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044246/unknown_From_your_contacts_survivinganotherday__169_wbrsgt.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044245/unknown_From_your_contacts_survivinganotherday__170_hbkdif.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044245/unknown_From_your_contacts_survivinganotherday__165_xyfhsr.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044245/unknown_From_your_contacts_survivinganotherday__167_qigckq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044245/unknown_From_your_contacts_survivinganotherday__166_q5krjn.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044244/unknown_From_your_contacts_survivinganotherday__164_cdk6va.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044244/unknown_From_your_contacts_survivinganotherday__163_djxxso.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044244/unknown_From_your_contacts_survivinganotherday__153_xocu0e.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044243/unknown_From_your_contacts_survivinganotherday__158_hdhxta.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044243/unknown_From_your_contacts_survivinganotherday__162_xbgumf.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044243/unknown_From_your_contacts_survivinganotherday__160_pzipbz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044242/unknown_From_your_contacts_survivinganotherday__156_hqsjbh.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044241/unknown_From_your_contacts_survivinganotherday__152_ezz4ad.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044240/unknown_From_your_contacts_survivinganotherday__146_h4eukv.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044240/unknown_From_your_contacts_survivinganotherday__150_wplx11.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044240/unknown_From_your_contacts_survivinganotherday__148_m0dbmy.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044239/unknown_From_your_contacts_survivinganotherday__147_b8hqzy.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044239/unknown_From_your_contacts_survivinganotherday__144_quulv7.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044239/unknown_From_your_contacts_survivinganotherday__142_zrmswc.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044238/unknown_From_your_contacts_survivinganotherday__141_mnvepn.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044238/unknown_From_your_contacts_survivinganotherday__140_awk4s5.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044238/unknown_From_your_contacts_survivinganotherday__135_orllrb.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044237/unknown_From_your_contacts_survivinganotherday__137_jpgury.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044237/unknown_From_your_contacts_survivinganotherday__138_qsdktp.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044237/unknown_From_your_contacts_survivinganotherday__136_s50epe.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044235/unknown_From_your_contacts_survivinganotherday__134_ahpof1.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044235/unknown_From_your_contacts_survivinganotherday__133_xdrj3v.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044235/unknown_From_your_contacts_survivinganotherday__132_tlokxq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044234/unknown_From_your_contacts_survivinganotherday__130_z64jca.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044234/unknown_From_your_contacts_survivinganotherday__129_f61hnq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044233/unknown_From_your_contacts_survivinganotherday__128_q3hdkf.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044233/unknown_From_your_contacts_survivinganotherday__127_ydac62.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044233/unknown_From_your_contacts_survivinganotherday__126_emlpqn.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044233/unknown_From_your_contacts_survivinganotherday__125_kjkg9t.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044232/unknown_From_your_contacts_survivinganotherday__123_jsdpyy.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044232/unknown_From_your_contacts_survivinganotherday__124_vqcbbw.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044232/unknown_From_your_contacts_survivinganotherday__121_krcqwj.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044232/unknown_From_your_contacts_survivinganotherday__122_yt43ez.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044232/unknown_From_your_contacts_survivinganotherday__119_k31qdz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044232/unknown_From_your_contacts_survivinganotherday__120_vy1fhl.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044230/unknown_From_your_contacts_survivinganotherday__118_soc8ru.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044230/2.18.25_24_bcmdsi.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044230/unknown_From_your_contacts_survivinganotherday__117_shjl9u.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044230/unknown_From_your_contacts_survivinganotherday__116_nzq5ri.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044229/unknown_From_your_contacts_survivinganotherday__114_ilgkrt.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044229/unknown_From_your_contacts_survivinganotherday__113_ymtbbg.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044229/unknown_From_your_contacts_survivinganotherday__112_k34d0b.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044228/unknown_From_your_contacts_survivinganotherday__111_rtaom4.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044228/unknown_From_your_contacts_survivinganotherday__109_a0b6h5.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044227/unknown_From_your_contacts_survivinganotherday__105_ylktdf.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044227/unknown_From_your_contacts_survivinganotherday__106_ubwfnh.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044227/unknown_From_your_contacts_survivinganotherday__107_w9m4dd.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044224/unknown_From_your_contacts_survivinganotherday__99_xicm13.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044226/unknown_From_your_contacts_survivinganotherday__103_y2qcgc.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044225/unknown_From_your_contacts_survivinganotherday__101_outrhx.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044224/unknown_From_your_contacts_survivinganotherday__100_dc73yt.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044224/unknown_From_your_contacts_survivinganotherday__98_j9atfy.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044224/unknown_From_your_contacts_survivinganotherday__97_fcwlwx.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044223/unknown_From_your_contacts_survivinganotherday__94_c4bakr.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044222/unknown_From_your_contacts_survivinganotherday__80_tk1qlz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044223/unknown_From_your_contacts_survivinganotherday__93_obmcht.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044223/unknown_From_your_contacts_survivinganotherday__96_hvrins.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044223/unknown_From_your_contacts_survivinganotherday__95_jh7qdz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044223/unknown_From_your_contacts_survivinganotherday__92_uapiys.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044222/unknown_From_your_contacts_survivinganotherday__91_bhe0yp.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044221/unknown_From_your_contacts_survivinganotherday__87_sfbliq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044221/unknown_From_your_contacts_survivinganotherday__88_sxbcgu.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044221/unknown_From_your_contacts_survivinganotherday__86_w8wvop.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044221/unknown_From_your_contacts_survivinganotherday__89_utitqk.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044220/unknown_From_your_contacts_survivinganotherday__85_mj5brz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044220/unknown_From_your_contacts_survivinganotherday__84_y3gkki.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044220/unknown_From_your_contacts_survivinganotherday__81_wtuzgv.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044220/unknown_From_your_contacts_survivinganotherday__83_s9cjgt.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044219/unknown_From_your_contacts_survivinganotherday__82_eomsbz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044219/unknown_From_your_contacts_survivinganotherday__78_lc3atb.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044218/unknown_From_your_contacts_survivinganotherday__75_rxdesx.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044218/unknown_From_your_contacts_survivinganotherday__77_wkqnuq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044218/unknown_From_your_contacts_survivinganotherday__76_vvx9wy.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044218/unknown_From_your_contacts_survivinganotherday__66_wrvlaf.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044217/unknown_From_your_contacts_survivinganotherday__72_nwapzr.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044217/unknown_From_your_contacts_survivinganotherday__74_xnvewt.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044217/unknown_From_your_contacts_survivinganotherday__71_dyf4m8.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044217/unknown_From_your_contacts_survivinganotherday__73_zuy5gp.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044216/unknown_From_your_contacts_survivinganotherday__70_vspr7k.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044216/unknown_From_your_contacts_survivinganotherday__69_g3ztes.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044215/unknown_From_your_contacts_survivinganotherday__67_uyv6tl.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044215/unknown_From_your_contacts_survivinganotherday__65_dyvcqk.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044215/unknown_From_your_contacts_survivinganotherday__61_oc54e6.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044214/unknown_From_your_contacts_survivinganotherday__63_hts9mp.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044214/unknown_From_your_contacts_survivinganotherday__62_xsce4s.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044214/unknown_From_your_contacts_survivinganotherday__64_n1p9mf.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044214/unknown_From_your_contacts_survivinganotherday__56_fhrs6a.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044213/unknown_From_your_contacts_survivinganotherday__60_cpif6a.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044213/unknown_From_your_contacts_survivinganotherday__59_x5hkme.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044213/unknown_From_your_contacts_survivinganotherday__58_ko5je4.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044213/unknown_From_your_contacts_survivinganotherday__57_m5pvjx.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044208/unknown_From_your_contacts_survivinganotherday__42_obybre.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044212/unknown_From_your_contacts_survivinganotherday__54_t25rx4.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044212/unknown_From_your_contacts_survivinganotherday__55_u6nl7e.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044212/unknown_From_your_contacts_survivinganotherday__53_kzb4wz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044211/unknown_From_your_contacts_survivinganotherday__52_pxkvfi.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044210/unknown_From_your_contacts_survivinganotherday__49_koebkh.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044210/unknown_From_your_contacts_survivinganotherday__50_icqcbu.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044210/unknown_From_your_contacts_survivinganotherday__48_wp2q1h.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044210/unknown_From_your_contacts_survivinganotherday__47_wihyuq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044209/unknown_From_your_contacts_survivinganotherday__46_hwqqtn.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044209/unknown_From_your_contacts_survivinganotherday__45_gozsef.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044209/unknown_From_your_contacts_survivinganotherday__44_aa6kmq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044209/unknown_From_your_contacts_survivinganotherday__43_o7zx3p.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044208/unknown_From_your_contacts_survivinganotherday__41_c1wdvc.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044208/unknown_From_your_contacts_survivinganotherday__37_b2ncv2.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044208/unknown_From_your_contacts_survivinganotherday__40_yxya02.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044207/unknown_From_your_contacts_survivinganotherday__32_awx6xv.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044207/unknown_From_your_contacts_survivinganotherday__39_ndjg3s.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044207/unknown_From_your_contacts_survivinganotherday__38_q35v9k.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044206/unknown_From_your_contacts_survivinganotherday__36_hwvgdf.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044205/unknown_From_your_contacts_survivinganotherday__30_hdxrjv.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044205/unknown_From_your_contacts_survivinganotherday__29_tshqus.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044205/unknown_From_your_contacts_survivinganotherday__31_r9oc3x.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044205/unknown_From_your_contacts_survivinganotherday__27_enxrpy.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044204/unknown_From_your_contacts_survivinganotherday__17_ughppe.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044204/unknown_From_your_contacts_survivinganotherday__26_kuchg3.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044204/unknown_From_your_contacts_survivinganotherday__24_kmclc0.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044204/unknown_From_your_contacts_survivinganotherday__25_ms3xpk.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044204/unknown_From_your_contacts_survivinganotherday__20_ix5wdz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044203/unknown_From_your_contacts_survivinganotherday__18_vmtvmc.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044203/unknown_From_your_contacts_survivinganotherday__22_wvhj33.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044203/unknown_From_your_contacts_survivinganotherday__21_gydm3d.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044202/unknown_From_your_contacts_survivinganotherday__16_jedlmh.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044201/unknown_From_your_contacts_survivinganotherday__14_r0na5l.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044201/2.4.2025_7_imq2cv.mov",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044200/unknown_From_your_contacts_survivinganotherday__8_y5e1dq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044201/unknown_From_your_contacts_survivinganotherday__13_gcbvap.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044199/unknown_From_your_contacts_survivinganotherday_m7cfxx.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044199/unknown_From_your_contacts_survivinganotherday__7_ous828.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044198/unknown_From_your_contacts_survivinganotherday__3_c7pcin.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044198/unknown_From_your_contacts_survivinganotherday__5_qexcro.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044197/unknown_From_your_contacts_survivinganotherday__2_uaopcy.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044196/unknown_From_your_contacts_survivinganotherday__4_n1cblk.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044195/unknown_From_your_contacts_survivingano_ttuzpk.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044195/unknown_From_your_contacts_survivinganot_n1queq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044194/The_good_guys_fight_for_the_bad_guys._drone_fpv_fyp_dronewarzone_droneshots_dronepilot_dronewar_ukraine_russia_war_brutal_dronebomb_u5bepu.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044194/unknown_From_your_contacts_e3jyxj.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044194/This_took_so_long_but_yeah_Miku_is_goated_miku_r%C3%A9el_edit_symbiote_fortnite_mbzjnj.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044192/RUNNIN_1_i2d6rd.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044194/THEYOU_1_i1oowd.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044193/THEPOE_1_c7ovvc.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044193/Tetotime---Discord.gg-shokupan---Song_is_fukkireta_kasaneteto_teto_utauloid_vocaloid_hatsunemiku_miku_projectdiva_fb6chp.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044192/Tag_your_sister_...._kishoreyyy_fyp_reels_fo2jwq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044192/roblox_ptxkcf.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044192/real_last_4_scaj37.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044191/Ree_more_work_qpoewj.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044191/real_last_3_qw5ucg.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044191/real_last_5_ayh5up.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044191/real_last_6_t6bugx.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044190/real_last_1_oaiw99.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044189/next_friday_edit_anime_ambient_fyp%E3%82%B7_2_fzffi8.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044189/Obviously_joking_guys_c_mon..._fyp_engineering_adp4nk.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044189/M5Stack_Cardputer_cyberpunk2077_evilkbgy9news_yapdollar_kbgy9_news_i3ft3d.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044189/MENTAL_1_evclue.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044189/let_me_rot_in_your_arms._vovzp1.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044188/Me_cfov10.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044187/Life_is_just_one_big_dress_up_party_n8wsnh.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044186/lastday1_24_g8qwar.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044186/lastday1_23_ygvkec.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044186/lastday1_22_mwat4k.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044185/lastday1_21_nbuhfe.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044185/lastday1_17_mqahqs.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044185/lastday1_20_xpe70f.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044185/lastday1_19_cyxlcx.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044184/lastday1_13_a7rfgc.mov",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044184/lastday1_14_x2ufis.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044183/lastday1_16_ftfz91.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044183/lastday1_15_ibe0nh.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044182/lastday1_9_w1fjch.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044182/lastday1_10_nwjrvi.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044182/lastday1_12_km9u7r.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044182/lastday1_11_u7x2c9.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044182/lastday1_6_rzz2ey.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044181/lastday1_8_bqdxgc.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044181/lastday1_7_ikgj6q.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044181/lastday1_5_byxfrn.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044180/lastday1_1_n0qdv1.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044180/lastday1_2_gjlhrc.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044176/evangedit_ys5mzr.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044180/lastday1_4_kx0qmb.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044180/lastday1_3_zkfwid.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044177/hug_me_please_...._meme_bread_anime_sad_melancholy_edit_fg1agx.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044178/it_s_not_even_fun_anymore_......._reels_explore_reelsinstagram_relatable_fyp_meme_viralreels_foryoupage_viral_manga_r2z8jf.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044177/I_m_the_real_looser_vqvldu.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044178/IWILLM_1_hbhgsh.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044177/Hopefully_the_slow_readers_who_follow_me_wont_complain_about_the_5s_long_video_gvkdoz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044176/Ears_On_---_mech_digitalart_artistsoninstagram_robot_robotart_art_anime_mechart_drawing_drawingoftheday_vonx22.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044174/bepopedit_pw0teu.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044174/Black_Holes_serialexperimentslain_serialexperiments_serialexperimentslainedit_sel_lain_lainedit_lainiwakuraedits_lainiwakuraedit_lainiwakura_iwakura_iwakuralainedit_iwakura_wired_freaks_reality_wm6h8p.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044174/ESTROG_1_djxkcl.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044174/DAY20-_1_p7awtr.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044170/2.20.25_8_b42vhj.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044172/AQPOk5tei0pKzEPTX5YpqL428_63v63U1L_tONymVN_vCBumbVv_u8Xk05uBG2vQNFI_jxgsV7VzPr3LhapUe19CvEVC8TDLRx76YwM_nyqya1.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044171/2.20.25_10_eytjzx.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044172/2.20.25_9_lljkic.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044170/2.20.25_7_mrj5k8.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044169/2.18.25_67_ymuy9e.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044169/2.20.25_6_slgf3a.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044169/2.20.25_5_jcsbdz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044168/2.20.25_4_lnlplc.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044167/2.20.25_2_znf1t6.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044164/2.18.25_65_slpzty.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044161/2.18.25_56_begvmn.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044155/2.18.25_53_jw2miw.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044156/2.18.25_58_zyc29p.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044156/2.18.25_55_jvcigj.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044153/2.18.25_49_mxcqjs.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044155/2.18.25_52_q0hrhz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044154/2.18.25_50_lkmssz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044155/2.18.25_51_lp2xfw.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044153/2.18.25_47_gw9qzd.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044153/2.18.25_45_is3yfe.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044153/2.18.25_46_cdfqsx.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044150/2.18.25_39_wpnmdl.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044152/2.18.25_43_pa3ny8.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044152/2.18.25_44_auvpcg.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044149/2.18.25_33_xgf8xs.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044150/2.18.25_38_aomgpo.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044150/2.18.25_41_it57sp.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044149/2.18.25_37_zojbay.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044148/2.18.25_35_dckzhq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044147/2.18.25_31_t25sod.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044147/2.18.25_32_s9a5w3.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044141/2.18.25_25_qwsd5z.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044141/2.18.25_22_fyzunp.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044140/2.18.25_18_mzcr0w.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044142/2.18.25_17_aoqyo8.mov",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044141/2.18.25_26_evaoee.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044139/2.18.25_21_psuu4w.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044139/2.18.25_23_sphlow.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044138/2.18.25_20_zpigdu.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044137/2.18.25_19_oiafxd.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044137/2.18.25_16_zv1g2m.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044135/2.18.25_14_z8at7w.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044136/2.18.25_15_tehzlr.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044135/2.18.25_13_vhb1hg.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044135/2.18.25_11_bsbtin.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044133/2.18.25_5_legmrd.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044133/2.18.25_9_pzuxa9.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044133/2.18.25_7_zgpw65.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044134/2.18.25_10_gniomz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044132/2.18.25_4_zeepy7.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044129/2.4.2025_15_kbgbd3.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044129/2.4.2025_14_xfdiz4.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044129/2.4.2025_13_bfn7ny.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044128/2.4.2025_12_bekqyj.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044128/2.4.2025_11_dl3t6c.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044127/2.4.2025_6_pdaljh.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044127/2.4.2025_10_bdnlrp.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044127/2.4.2025_8_med9ka.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044126/2.4.2025_3_zhwwlv.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044125/2.4.2025_5_h6dtuf.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044125/2.4.2025_1_psykey.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044124/2.4.2025_2_ybc0pz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044124/2.1.2025_9_dbunt1.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044122/2.1.2025_5_ellexp.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044123/2.1.2025_6_ineuiv.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044123/2.1.2025_8_tlf2hh.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044123/2.1.2025_7_nk5zch.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044121/2.1.2025_2_efy8dh.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044121/2.1.2025_4_u9aqap.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044117/1.30.25_41_jljlun.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044114/1.30.25_40_eerq9q.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044119/1.30.25_44_h9kege.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044118/1.30.25_43_r5g6aa.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044110/1.30.25_38_fkq0ot.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044111/1.30.25_35_whcbgh.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044110/1.30.25_39_w4vx9u.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044110/1.30.25_34_cj4gzt.mov",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044110/1.30.25_37_lhbmoi.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044108/1.30.25_28_dddtlo.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044109/1.30.25_32_pnhvcg.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044109/1.30.25_36_nh1uye.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044107/1.30.25_33_rxv24b.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044106/1.30.25_29_mpyisw.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044105/1.30.25_24_w7dinh.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044105/1.30.25_26_xv9xuo.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044105/1.30.25_27_qdvisn.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044105/1.30.25_20_wo3ef5.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044105/1.30.25_23_fnguxc.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044104/1.30.25_12_csu6iz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044103/1.30.25_22_twt1ve.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044103/1.30.25_18_uk7axc.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044101/1.30.25_11_tjsw0k.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044099/1.30.25_10_ssb6y6.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044099/1.30.25_8_dv91xn.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044098/1.30.25_7_aygtza.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044098/1.30.25_6_jp2czy.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044098/1.30.25_3_wtpe9n.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044097/1.30.25_4_aylowc.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044097/1.30.25_1_kl2ze4.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044097/1.30.25_2_qbobra.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740044097/HIORI_1_fmf8qu.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459806/unknown_From_your_contacts_survivinganotherday__50_vwiw6f.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459807/unknown_From_your_contacts_survivinganotherday__51_w9wx3r.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459807/unknown_From_your_contacts_survivinganotherday__51_w9wx3r.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459806/unknown_From_your_contacts_survivinganotherday__52_dwmxsw.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459806/unknown_From_your_contacts_survivinganotherday_j6mdht.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459804/unknown_From_your_contacts_survivinganotherday__5_ptsetd.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459805/unknown_From_your_contacts_survivinganotherday__3_zaixcj.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459805/unknown_From_your_contacts_survivinganotherday__4_woanz7.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459804/unknown_From_your_contacts_survivinganotherday__2_ldjzmv.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459804/unknown_From_your_contacts_survivinganotherday__6_u4z7yb.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459804/unknown_From_your_contacts_survivinganotherday__8_wkrdp9.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459803/unknown_From_your_contacts_survivinganotherday__7_ddgspe.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459803/unknown_From_your_contacts_survivinganotherday__11_g5ptta.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459803/unknown_From_your_contacts_survivinganotherday__9_hu6cad.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459802/unknown_From_your_contacts_survivinganotherday__10_wsxk9h.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459802/unknown_From_your_contacts_survivinganotherday__14_hczok3.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459801/unknown_From_your_contacts_survivinganotherday__13_t8xg7u.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459801/unknown_From_your_contacts_survivinganotherday__16_woaddp.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459801/unknown_From_your_contacts_survivinganotherday__12_ek4rn2.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459801/unknown_From_your_contacts_survivinganotherday__15_mdb4ti.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459801/unknown_From_your_contacts_survivinganotherday__17_bitr2e.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459800/unknown_From_your_contacts_survivinganotherday__36_sf8eqh.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459800/unknown_From_your_contacts_survivinganotherday__18_hudi2e.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459799/unknown_From_your_contacts_survivinganotherday__20_ie9ey9.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459800/unknown_From_your_contacts_survivinganotherday__39_pejcua.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459799/unknown_From_your_contacts_survivinganotherday__19_n8qzx2.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459799/unknown_From_your_contacts_survivinganotherday__37_ayhnnh.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459799/unknown_From_your_contacts_survivinganotherday__21_ko5v0l.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459798/unknown_From_your_contacts_survivinganotherday__22_hmabeu.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459798/unknown_From_your_contacts_survivinganotherday__38_v24nf9.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459797/unknown_From_your_contacts_survivinganotherday__40_zrb6a2.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459796/unknown_From_your_contacts_survivinganotherday__43_umwuvr.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459796/unknown_From_your_contacts_survivinganotherday__46_ppkbcb.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459797/unknown_From_your_contacts_survivinganotherday__41_fckrff.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459796/unknown_From_your_contacts_survivinganotherday__44_e8gpql.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459796/unknown_From_your_contacts_survivinganotherday__42_o6geoc.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459796/unknown_From_your_contacts_survivinganotherday__47_semgjh.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459795/unknown_From_your_contacts_survivinganotherday__48_kep9z8.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1740459795/unknown_From_your_contacts_survivinganotherday__45_vreqx1.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066281/3_4_2025_50_tytzmv.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066281/3_4_2025_44_hvvt4j.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066281/3_4_2025_48_tqv869.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066280/3_4_2025_51_pr9uhu.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066278/3_4_2025_39_ahkyfh.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066279/3_4_2025_47_hg2hgk.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066278/3_4_2025_42_oikzi5.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066278/3_4_2025_45_l28b92.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066279/3_4_2025_46_hzwzgl.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066278/3_4_2025_40_yokxos.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066278/3_4_2025_43_orbwid.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066277/3_4_2025_36_ramtb2.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066277/3_4_2025_41_fejcc1.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066276/3_4_2025_37_w26pfj.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066276/3_4_2025_38_r5jr4m.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066276/3_4_2025_34_u38ng7.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066276/3_4_2025_35_v4yfde.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066275/3_4_2025_33_mumczr.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066275/3_4_2025_31_hmsba6.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066275/3_4_2025_30_tn8v03.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066274/3_4_2025_24_ygbldr.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066274/3_4_2025_27_muao6y.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066274/3_4_2025_29_nb9di6.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066273/3_4_2025_15_kzpy3s.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066274/3_4_2025_28_w3mum8.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066273/3_4_2025_25_d475ce.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066273/3_4_2025_21_ydlt8c.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066273/3_4_2025_26_va5iik.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066272/3_4_2025_20_dotmpb.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066271/3_4_2025_19_gapdkv.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066271/3_4_2025_22_a3tzvr.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066271/3_4_2025_23_a69gow.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066269/3_4_2025_14_tzwta3.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066269/3_4_2025_16_eg0duf.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066269/3_4_2025_17_cb8js0.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066269/3_4_2025_18_qtlcli.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066268/3_4_2025_10_jmfkgs.mov",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066267/3_4_2025_8_vqwwcv.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066267/3_4_2025_13_c5etaj.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066267/3_4_2025_7_x5raix.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066267/3_4_2025_12_nun29z.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066267/3_4_2025_11_dh195w.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066266/3_4_2025_9_mceqat.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066265/3_4_2025_6_amy2nc.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066265/3_4_2025_3_o1s7bo.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066264/3_4_2025_1_gfdmd9.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066264/3_4_2025_2_zox1xx.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066264/3_4_2025_5_ocwb5q.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1741066264/3_4_2025_4_m2q4sz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742431138/unknown_From_your_contacts_survivinganotherday__17_jmaat2.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742431138/unknown_From_your_contacts_survivinganotherday__7_n5a4zf.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742431137/unknown_From_your_contacts_survivinganotherday__9_fot3s4.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742431137/unknown_From_your_contacts_survivinganotherday__10_zwotar.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742431137/unknown_From_your_contacts_survivinganotherday__11_vgl0qc.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742431136/unknown_From_your_contacts_survivinganotherday__6_clyvtq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742431137/unknown_From_your_contacts_survivinganotherday__13_iayldq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742431136/unknown_From_your_contacts_survivinganotherday__14_bucrww.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742431136/unknown_From_your_contacts_survivinganotherday__5_t1mi37.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742431136/unknown_From_your_contacts_survivinganotherday__15_yhtqm0.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742431136/unknown_From_your_contacts_survivinganotherday__8_flxrcq.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742431136/unknown_From_your_contacts_survivinganotherday__12_sqis7u.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742431135/unknown_From_your_contacts_survivinganotherday__4_pgwzhj.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742431135/unknown_From_your_contacts_survivinganotherday__16_bwrtoz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742431134/unknown_From_your_contacts_survivinganotherday_gvvwjn.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742431134/unknown_From_your_contacts_survivinganotherday__2_v7niqz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742431134/unknown_From_your_contacts_survivinganotherday__18_yjomtd.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742431134/unknown_From_your_contacts_survivinganotherday__3_xn7y8d.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742432443/its_all_I_think_about_now._pixelart_pixelartist_nostalgiacore_framebyframe_animationreel_retroartwork_quoteofthenight_keepongoing_illustrationoftheday_friendgroup_kmg2li.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742432443/love_when_generational_wealth_drops_a_grindset_workshop.wealth_messes_with_your_eyesight._when_you_don_t_have_it_you_see_every_price_tag_every_locked_door_every_excuse_people_make_for_why_you_should_stay_where_you_ar_iil3by.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742432443/carving_your_name_into_my_skin.---_vhs_foryou_memories_ambientmusic_mentalhealth_tza2yk.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742432443/let_me_rot_in_your_arms._xvzgub.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742432442/Past_lives_.._Follow_--_lyrically.og_for_more_edits_._._._pastlives_lyrics_lyricsvideo_music_song_editaudio_foryou_foryoupage_fyp_fyp%E3%82%B7_uo9dkv.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742432442/jumpstyle_szn_join_the_Coven_in_bio_rm1e4b.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742432441/Literally_me._me_literallyme_meme_memes_real_explorepage_explore_fyp%E3%82%B7_fyp_nbygfa.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742432441/Internet_in_the_2000s.Follow-_nostalgiasite_for_more_._dreamcore_liminalspace_internet_2000s_sleep_dream_art_nostalgia_2000snostalgia_strange_childhood_nostalgic_nostalgic_2000smusic_liminal_viral_aesth_p50i6k.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742432441/Spotify_mod_in_bio_._music_spotify_spotifymod_ww9sne.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1742432441/She_is_my_everything...._eofdqe.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048142/unknown_From_your_contacts_survivinganotherday_kvlxev.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048140/unknown_From_your_contacts_survivinganotherday__8_fhaytf.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048139/unknown_From_your_contacts_survivinganotherday__54_qjio3j.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048136/unknown_From_your_contacts_survivinganotherday__7_aufy5x.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048136/unknown_From_your_contacts_survivinganotherday__5_wmzfdg.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048136/unknown_From_your_contacts_survivinganotherday__4_tie0d3.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048135/unknown_From_your_contacts_survivinganotherday__3_hiynlc.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048136/unknown_From_your_contacts_survivinganotherday__6_ghnhhp.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048134/unknown_From_your_contacts_survivinganotherday__10_xshxls.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048134/unknown_From_your_contacts_survivinganotherday__12_khiqed.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048134/unknown_From_your_contacts_survivinganotherday__9_pxvlna.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048134/unknown_From_your_contacts_survivinganotherday__15_xfwjaf.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048134/unknown_From_your_contacts_survivinganotherday__11_v55d93.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048133/unknown_From_your_contacts_survivinganotherday__13_z9987o.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048133/unknown_From_your_contacts_survivinganotherday__14_zsgqab.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048132/unknown_From_your_contacts_survivinganotherday__16_qqkrgn.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048132/unknown_From_your_contacts_survivinganotherday__17_xktnu9.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048132/unknown_From_your_contacts_survivinganotherday__37_ewxq3h.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048132/unknown_From_your_contacts_survivinganotherday__22_xcozfd.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048131/unknown_From_your_contacts_survivinganotherday__19_rzhixe.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048131/unknown_From_your_contacts_survivinganotherday__18_xuxkbe.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048131/unknown_From_your_contacts_survivinganotherday__21_qxdizl.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048130/unknown_From_your_contacts_survivinganotherday__36_mg41kn.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048129/unknown_From_your_contacts_survivinganotherday__40_csib0w.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048130/unknown_From_your_contacts_survivinganotherday__38_ogjqrz.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048129/unknown_From_your_contacts_survivinganotherday__45_vzmh4n.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048129/unknown_From_your_contacts_survivinganotherday__43_ca4cce.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048129/unknown_From_your_contacts_survivinganotherday__41_brm1mr.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048129/unknown_From_your_contacts_survivinganotherday__42_u8kjwl.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048129/unknown_From_your_contacts_survivinganotherday__39_qdl55a.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048127/unknown_From_your_contacts_survivinganotherday__48_xs0apr.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048127/unknown_From_your_contacts_survivinganotherday__44_oykxld.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048127/unknown_From_your_contacts_survivinganotherday__47_ddqqpo.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048126/unknown_From_your_contacts_survivinganotherday__49_nnanf5.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048126/unknown_From_your_contacts_survivinganotherday__53_gtip2s.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048126/unknown_From_your_contacts_survivinganotherday__51_tefwax.mp4",
    "https://res.cloudinary.com/dnjuew3lw/video/upload/v1744048126/unknown_From_your_contacts_survivinganotherday__52_faopyk.mp4",


];

// Function to shuffle an array
const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};


// Styled Modal with a Red Top Bar
const StyledModal = styled(Modal)`
    .top-bar {
        background: #FF0000 !important; /* YouTube Red */
        color: white; /* White text */
    }
`;

// Styled Components for Retro Controls
const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #c0c0c0;
    padding-bottom: 5px;
`;

const ProgressBar = styled.div`
    width: ${({ progress }) => progress}%;
    height: 5px;
    background: red;
    transition: width 0.3s ease-in-out;
`;

const ControlsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    padding: 5px;
    background: #222;
    color: white;
    font-size: 12px;
`;

const VolumeSlider = styled.input`
    width: 100px;
    margin-left: 10px;
`;

function Mp4Player({ closePlayer, isMobile }) {
    const videoRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(0.2);
    const [remainingVideos, setRemainingVideos] = useState([]);

    // Selects a random video from the shuffled list
    const getNextVideo = () => {
        if (remainingVideos.length === 0) {
            // If all videos have been played, reset and shuffle again
            const shuffledVideos = shuffleArray([...videoFiles]);
            setRemainingVideos(shuffledVideos);
            return shuffledVideos[0];
        }

        // Get the next video and remove it from the queue
        const nextVideo = remainingVideos[0];
        setRemainingVideos(remainingVideos.slice(1));
        return nextVideo;
    };

    // Set the first video to a random one when the player opens
    useEffect(() => {
        const shuffledVideos = shuffleArray([...videoFiles]); // Shuffle video order
        setRemainingVideos(shuffledVideos.slice(1)); // Store the remaining videos
        setCurrentVideo(shuffledVideos[0]); // Select the first random video
    }, []);

    const [currentVideo, setCurrentVideo] = useState(null);

    // Play video when source updates
    useEffect(() => {
        if (videoRef.current && currentVideo) {
            videoRef.current.volume = volume;
            videoRef.current.src = currentVideo;
            videoRef.current.play();
        }
    }, [currentVideo]);

    // Play the next video automatically when the current one ends
    const handleVideoEnd = () => {
        setCurrentVideo(getNextVideo());
    };

    // Update progress bar as video plays
    const updateProgress = () => {
        if (videoRef.current) {
            const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(percentage);
        }
    };

    // Update volume when slider changes
    const changeVolume = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        if (videoRef.current) videoRef.current.volume = newVolume;
    };

    return (
        <Modal
            icon="media_video"
            title="YouTube Player - Live YouTube Shorts"
            closeModal={closePlayer}
            style={{
                left: isMobile ? '5%' : '50%',
                top: isMobile ? '3%' : '15%',
                width: isMobile ? '90%' : 500,
            }}
            menu={[
                { name: 'File', list: [] },
                { name: 'Playback', list: [] },
                { name: 'Help', list: [] }
            ]}>
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
                padding={10}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                {/* Old-School YouTube Video Container */}
                <VideoContainer>
                    <video
                        ref={videoRef}
                        onTimeUpdate={updateProgress}
                        onEnded={handleVideoEnd} // Auto play next video
                        width="100%"
                        height="280px"
                        loop={false}
                        autoPlay
                    >
                        <source src={currentVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Fake Old-School Progress Bar */}
                    <ProgressBar progress={progress} />

                    {/* Old-School YouTube Controls */}
                    <ControlsContainer>
                        <VolumeSlider
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={changeVolume}
                        />
                    </ControlsContainer>
                </VideoContainer>

            </Frame>
        </Modal>
    );
}

export default Mp4Player;
