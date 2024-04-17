const { v4: uuidv4 } = require("uuid");

export const DATA = [
  {
    category: "Bikes",
    value: "bikes" as const,
    id: uuidv4(),
    featured: [
      {
        type: "Road",
        value: "road" as const,
        id: uuidv4(),
        href: `/products/bikes/road`,
        items: [
          {
            brand: "Pinarello",
            kind: "Pinarello",
            id: uuidv4(),
            models: [
              {
                name: "DOGMA X",
                id: uuidv4(),
                price: "8 099",
                images: [
                  "https://pinarello.com/storage/Variant/cff22838c3f40059bf83fc0d70bf22e9.png",
                  "https://pinarello.com/storage/ProductGallery/ed2fbe4ff7aa55ee50d4869ff83e446f.png",
                  "https://pinarello.com/storage/ProductGallery/276b2100d710db42e0c4bd5faefe612a.png",
                ],
              },
              {
                name: "X9",
                id: uuidv4(),
                price: "7 599",
                images: [
                  "https://pinarello.com/storage/Variant/bee41c10b944a0109ad629cd3762d5a2.png",
                  "https://pinarello.com/storage/ProductGallery/382bd213e23b2ddb2e9221c22790bb33.png",
                  "https://pinarello.com/storage/ProductGallery/ee15e60957b9cd78c2c7e0893ccd34c6.png",
                ],
              },
              {
                name: "X7",
                id: uuidv4(),
                price: "6 599",
                images: [
                  "https://pinarello.com/storage/Variant/fbbd392f5cb45ad84635c67af77917bf.png",
                  "https://pinarello.com/storage/ProductGallery/8f1ff404ad6cabeb5e4f7d5ddc8b394e.png",
                  "https://pinarello.com/storage/ProductGallery/f2001ea94e732f52e06ff17815c11f8d.png",
                ],
              },
              {
                name: "DOGMA F",
                id: uuidv4(),
                price: "12 199",
                images: [
                  "https://pinarello.com/storage/Variant/7ea0be621fc5db07d97172c40dafb7fd.png",
                  "https://pinarello.com/storage/ProductGallery/ab59fa5ad591f2bf3f6df55da27b4aa2.png",
                  "https://pinarello.com/storage/ProductGallery/ecb745e982d747fab71cb2460d37af8b.png",
                ],
              },
              {
                name: "BOLIDE TR",
                id: uuidv4(),
                price: "16 599",
                images: [
                  "https://pinarello.com/storage/Variant/a32e9751bcd0c8183e8ef2f579721b6b.png",
                  "https://pinarello.com/storage/ProductGallery/da64885107379bc7eee9ac5065f704e3.png",
                  "https://pinarello.com/storage/ProductGallery/6af1b4d39be492812c0f90b1ee5125d6.png",
                ],
              },
            ],
          },
          {
            brand: "Canyon",
            kind: "Canyon",
            id: uuidv4(),
            models: [
              {
                name: "Aeroad CFR",
                id: uuidv4(),
                price: "8 939",
                images: [
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwd97a2502/images/full/full_2024_/2023/full_2024_3691_aeroad-cfr-etap_P10_P5.jpg?sw=1300&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwcd337338/images/detail/detail_202/2023/detail_2024_3691_aeroad-cfr-etap_P10_P5.jpg?sw=1300&sh=1300&sm=cut&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwe7d090c0/images/top/3691_TOP-1/2023/3691_TOP-1_aeroad-cfr-etap_P10_aero.jpg?sw=1300&sh=1300&sm=cut&sfrm=jpg&q=80",
                ],
              },
              {
                name: "Ultimate CFR",
                id: uuidv4(),
                price: "9 129 ",
                images: [
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw53cff317/images/full/full_2023_/2023/full_2023_3563_ultimate-cfr-etap_P03_P5.jpg?sw=1300&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwa449bcd3/images/detail/detail_202/2023/detail_2023_3563_ultimate-cfr-etap_P03_P5.jpg?sw=1300&sh=1300&sm=cut&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw3068cdd7/images/top/3563_TOP-1/2023/3563_TOP-1_ultimate-cfr-etap_P03_Aero-cockpit_002.jpg?sw=1300&sh=1300&sm=cut&sfrm=jpg&q=80",
                ],
              },
              {
                name: "Inflite CFR Di2",
                id: uuidv4(),
                price: "6 629",
                images: [
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwad2be17c/images/full/full_2024_/2023/full_2024_Inflite_3553_inflite-cfr-di2-team_P31_P5.jpg?sw=1300&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw26758545/images/detail/detail_202/2023/detail_2024_Inflite_3553_inflite-cfr-di2-team_P31_P5.jpg?sw=1300&sh=1300&sm=cut&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw4170548b/images/top/3553_TOP-1/2023/3553_TOP-1_inflite-cfr-di2-team_P31_cockpit_007.jpg?sw=1300&sh=1300&sm=cut&sfrm=jpg&q=80",
                ],
              },
              {
                name: "Ultimate CF SLX 8",
                id: uuidv4(),
                price: "6 599 ",
                images: [
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwf356411c/images/full/full_2023_/2023/full_2023_3559_ultimate-cf-slx-8-di2_P03_P5.jpg?sw=1300&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw863dd38f/images/detail/detail_202/2023/detail_2023_3559_ultimate-cf-slx-8-di2_P03_P5.jpg?sw=1300&sh=1300&sm=cut&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwe3461f01/images/top/3559_TOP-1/2023/3559_TOP-1_ultimate-cf-slx-8-di2_P03_Aero-cockpit.jpg?sw=1300&sh=1300&sm=cut&sfrm=jpg&q=80",
                ],
              },
            ],
          },
          {
            brand: "Specialized",
            kind: "Specialized",
            id: uuidv4(),
            models: [
              {
                name: "Allez",
                id: uuidv4(),
                price: "1 400",
                images: [
                  "https://assets.specialized.com/i/specialized/90022-70_ALLEZ-E5-DISC-SMK-WHT-SILDST_HERO?$scom-pdp-product-image$&fmt=auto",
                  "https://assets.specialized.com/i/specialized/90022-70_ALLEZ-E5-DISC-SMK-WHT-SILDST_FDSQ?$scom-pdp-product-image$&fmt=auto",
                  "https://assets.specialized.com/i/specialized/90022-70_ALLEZ-E5-DISC-SMK-WHT-SILDST_RDSQ?$scom-pdp-product-image$&fmt=auto",
                ],
              },
              {
                name: "Roubaix SL8",
                id: uuidv4(),
                price: "5 450",
                images: [
                  "https://assets.specialized.com/i/specialized/94423-51_ROUBAIX-COMP-REDGSTPRL-DUNEWHT-METOBSD_HERO?$scom-pdp-product-image$&fmt=auto",
                  "https://assets.specialized.com/i/specialized/94423-51_ROUBAIX-COMP-REDGSTPRL-DUNEWHT-METOBSD_FDSQ?$scom-pdp-product-image$&fmt=auto",
                  "https://assets.specialized.com/i/specialized/94423-51_ROUBAIX-COMP-REDGSTPRL-DUNEWHT-METOBSD_RDSQ?$scom-pdp-product-image$&fmt=auto",
                ],
              },
              {
                name: "Tarmac SL8 Pro",
                id: uuidv4(),
                price: "10 999",
                images: [
                  "https://assets.specialized.com/i/specialized/94924-12_TARMAC-SL8-PRO-UDI2-METPNGRN-WHT_HERO?$scom-pdp-product-image$&fmt=auto",
                  "https://assets.specialized.com/i/specialized/94924-12_TARMAC-SL8-PRO-UDI2-METPNGRN-WHT_FDSQ?$scom-pdp-product-image$&fmt=auto",
                  "https://assets.specialized.com/i/specialized/94924-12_TARMAC-SL8-PRO-UDI2-METPNGRN-WHT_RDSQ?$scom-pdp-product-image$&fmt=auto",
                ],
              },
            ],
          },
          {
            brand: "Lapierre",
            kind: "Lapierre",
            id: uuidv4(),
            models: [
              {
                name: "Xelius SL 7.0",
                id: uuidv4(),
                price: "4 999",
                images: [
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/61/3e/36/1701956409/Xelius%20SL%207.0%20C1%20-%20Lapierre%20MY24%20-%20View%20(1).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/62/29/b3/1701956408/Xelius%20SL%207.0%20C1%20-%20Lapierre%20MY24%20-%20View%20(2).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/25/12/e6/1701956409/Xelius%20SL%207.0%20C1%20-%20Lapierre%20MY24%20-%20View%20(3).jpeg?force_format=webp",
                ],
              },
              {
                name: "Xelius SL 8.0",
                id: uuidv4(),
                price: "5 999",
                images: [
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/89/59/bd/1701956587/Xelius%20SL%208.0%20C1%20-%20Lapierre%20MY24%20-%20View%20(1).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/14/9e/8a/1701956587/Xelius%20SL%208.0%20C1%20-%20Lapierre%20MY24%20-%20View%20(2).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/20/57/82/1701956586/Xelius%20SL%208.0%20C1%20-%20Lapierre%20MY24%20-%20View%20(3).jpeg?force_format=webp",
                ],
              },
              {
                name: "Xelius SL 9.0",
                id: uuidv4(),
                price: "8 599",
                images: [
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/76/2c/24/1704809648/Xelius%20SL%209.0%20-%20Lapierre%20MY24%20-%20View%20(1).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/e4/98/fc/1704809651/Xelius%20SL%209.0%20-%20Lapierre%20MY24%20-%20View%20(2).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/b2/1f/5f/1704809775/Xelius%20SL%209.0%20-%20Lapierre%20MY24%20-%20View%20KF%203.jpeg?force_format=webp",
                ],
              },
              {
                name: "Aircode DRS 5.0",
                id: uuidv4(),
                price: "3 799",
                images: [
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/c3/3c/19/1701944435/Aircode%20DRS%205.0%20-%20Lapierre%20MY24%20-%20View%20(1).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/bf/46/d9/1701944435/Aircode%20DRS%205.0%20-%20Lapierre%20MY24%20-%20View%20(2).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/59/fe/7d/1701944436/Aircode%20DRS%205.0%20-%20Lapierre%20MY24%20-%20View%20(3).jpeg?force_format=webp",
                ],
              },
            ],
          },
          {
            brand: "Trek",
            kind: "Trek",
            id: uuidv4(),
            models: [
              {
                name: "Madone SLR 9",
                id: uuidv4(),
                price: "14 999",
                images: [
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/MadoneSLR9_23_37419_B_Portrait",
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/MadoneSLR9_23_37419_B_Alt1",
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/MadoneSLR9_23_37419_B_Alt2",
                ],
              },
              {
                name: "Madone SLR 6",
                id: uuidv4(),
                price: "8 999",
                images: [
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/MadoneSLR6_23_37416_A_Portrait",
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/MadoneSLR6_23_37416_A_Alt1",
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/MadoneSLR6_23_37416_A_Alt2",
                ],
              },
            ],
          },
          {
            brand: "Colnago",
            kind: "Colnago",
            id: uuidv4(),
            models: [
              {
                name: "C68",
                id: uuidv4(),
                price: "7 999",
                images: [
                  "https://colnagopolska.pl/wp-content/uploads/2024/02/Colnago-C68-Road-HRBK.jpg",
                  "https://colnagopolska.pl/wp-content/uploads/2024/02/COLNAGO-C68-FONDO-NERO-8-Grande-1024x683.jpg",
                  "https://colnagopolska.pl/wp-content/uploads/2024/02/COLNAGO-C68-FONDO-NERO-71-Personalizzato-1024x683.jpg",
                ],
              },
              {
                name: "V4Rs ",
                id: uuidv4(),
                price: "9 999",
                images: [
                  "https://colnagopolska.pl/wp-content/uploads/2024/02/Colnago-V4Rs-SDM3.jpg",
                  "https://colnagopolska.pl/wp-content/uploads/2024/02/V4Rs-particolari-team-19-min-1.jpg",
                  "https://colnagopolska.pl/wp-content/uploads/2024/02/V4Rs-rosso-particolari-8-min-1.jpg",
                ],
              },
              {
                name: "TT1",
                id: uuidv4(),
                price: "18 959",
                images: [
                  "https://colnagopolska.pl/wp-content/uploads/2024/02/Colnago-TT1-SDM1.jpg",
                  "https://colnagopolska.pl/wp-content/uploads/2024/02/Colnago-TT1-Fondo-nero-8-min-1.jpg",
                  "https://colnagopolska.pl/wp-content/uploads/2024/02/Colnago-TT1-Fondo-nero-21-min-1.jpg",
                ],
              },
            ],
          },
          {
            brand: "Merida",
            kind: "Merida",
            id: uuidv4(),
            models: [
              {
                name: "SCULTURA ENDURANCE",
                id: uuidv4(),
                price: "2 999",
                images: [
                  "https://d2lljesbicak00.cloudfront.net/merida-v2/crud-zoom-img//master/bikes/2024/SCULTURA_ENDURANCE_6000_redblk_MY24.tif?p3",
                ],
              },
              {
                name: "SCULTURA 8000",
                id: uuidv4(),
                price: "12 999",
                images: [
                  "https://d2lljesbicak00.cloudfront.net/merida-v2/crud-zoom-img//master/bikes/2024/SCULTURA_8000_redblk_MY24.tif?p3",
                ],
              },
            ],
          },
        ],
      },
      {
        type: "Gravel",
        value: "gravel" as const,
        id: uuidv4(),
        href: `/products/bikes/gravel`,
        items: [
          {
            brand: "Trek",
            kind: "Trek",
            id: uuidv4(),
            models: [
              {
                name: "Checkpoint SL 5",
                id: uuidv4(),
                price: "7 599",
                images: [
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/CheckpointSL5_22_35169_A_Portrait",
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/CheckpointSL5_22_35169_A_Alt1",
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/CheckpointSL5_22_35169_A_Alt2",
                ],
              },
              {
                name: "Checkpoint SLR 7",
                id: uuidv4(),
                price: "10 899",
                images: [
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/CheckpointSLR7AXS-24-41349-C-Portrait",
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/CheckpointSLR7AXS-24-41349-C-Alt1",
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/CheckpointSLR7AXS-24-41349-C-Alt3",
                ],
              },
            ],
          },
          {
            brand: "Canyon",
            kind: "Canyon",
            id: uuidv4(),
            models: [
              {
                name: "Grail CF SLX 8",
                id: uuidv4(),
                price: "4 890",
                images: [
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw5b417d9d/images/full/full_2023_/2023/full_2023_grail_3579_grail-cf-slx-8-di2_P01_P5.jpg?sw=1300&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw05b0c93c/images/detail/detail_202/2023/detail_2023_grail_3579_grail-cf-slx-8-di2_P01_P5.jpg?sw=1300&sh=1300&sm=cut&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw17adb3bb/images/top/3579_TOP-1/2023/3579_TOP-1_grail-cf-slx-8-di2_P01_cable-integration.jpg?sw=1300&sh=1300&sm=cut&sfrm=jpg&q=80",
                ],
              },
              {
                name: "Grizl CF SL 8",
                id: uuidv4(),
                price: "3 999",
                images: [
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw35a67160/images/full/full_2023_/2023/full_2023_3785_grizl-cf-sl-8-1by_P07_P5.jpg?sw=1300&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw18670b2c/images/detail/detail_202/2023/detail_2023_3785_grizl-cf-sl-8-1by_P07_P5.jpg?sw=1300&sh=1300&sm=cut&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwb669be07/images/top/3785_TOP-1/2023/3785_TOP-1_grizl-cf-sl-8-1by_P07_frame.jpg?sw=1300&sh=1300&sm=cut&sfrm=jpg&q=80",
                ],
              },
              {
                name: "Grizl CF SLX 8 EKAR",
                id: uuidv4(),
                price: "4 000",
                images: [
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw95271735/images/full/full_2024_/2023/full_2024_3703_grizl-cf-slx-9-1by-eps_P07_P5.jpg?sw=1300&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw8e2f37c0/images/detail/detail_202/2023/detail_2024_3703_grizl-cf-slx-9-1by-eps_P07_P5.jpg?sw=1300&sh=1300&sm=cut&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwc72b451f/images/top/3703_TOP-1/2023/3703_TOP-1_grizl-cf-slx-9-1by-eps_P07_frame.jpg?sw=1300&sh=1300&sm=cut&sfrm=jpg&q=80",
                ],
              },
            ],
          },
          {
            brand: "Lapierre",
            kind: "Lapierre",
            id: uuidv4(),
            models: [
              {
                name: "Crosshill 6.0",
                id: uuidv4(),
                price: "2 599",
                images: [
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/85/a7/44/1702048491/Crosshill%206.0%20-%20Lapierre%20MY24%20-%20View%20(1).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/4d/d9/28/1702048491/Crosshill%206.0%20-%20Lapierre%20MY24%20-%20View%20(2).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/4f/83/a1/1702048491/Crosshill%206.0%20-%20Lapierre%20MY24%20-%20View%20(3).jpeg?force_format=webp",
                ],
              },
              {
                name: "Crosshill 5.0 ",
                id: uuidv4(),
                price: "2 199",
                images: [
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/64/91/4e/1702047311/Crosshill%205.0%20-%20Lapierre%20MY24%20-%20View%20(1).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/da/81/f9/1702047311/Crosshill%205.0%20-%20Lapierre%20MY24%20-%20View%20(2).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/af/d2/6a/1702047311/Crosshill%205.0%20-%20Lapierre%20MY24%20-%20View%20(3).jpeg?force_format=webp",
                ],
              },
              {
                name: "Crosshill 3.0",
                id: uuidv4(),
                price: "1 699",
                images: [
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/22/7c/6f/1702042896/Crosshill%203.0%20-%20Lapierre%20MY24%20-%20View%20(1).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/48/0e/c4/1702042895/Crosshill%203.0%20-%20Lapierre%20MY24%20-%20View%20(2).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/47/d2/96/1702042896/Crosshill%203.0%20-%20Lapierre%20MY24%20-%20View%20(3).jpeg?force_format=webp",
                ],
              },
              {
                name: "Crosshill 2.0",
                id: uuidv4(),
                price: "1 299",
                images: [
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/60/e2/26/1702026734/Crosshill%202.0%20-%20Lapierre%20MY24%20-%20View%20(1).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/a8/54/27/1702026734/Crosshill%202.0%20-%20Lapierre%20MY24%20-%20View%20(2).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/ae/f7/a0/1702026734/Crosshill%202.0%20-%20Lapierre%20MY24%20-%20View%20(3).jpeg?force_format=webp",
                ],
              },
            ],
          },
          {
            brand: "Specialized",
            kind: "Specialized",
            id: uuidv4(),
            models: [
              {
                name: "Diverge E5",
                id: uuidv4(),
                price: "1 900",
                images: [
                  "https://assets.specialized.com/i/specialized/95423-70_DIVERGE-E5-BRCH-WHTMTN_HERO?$scom-pdp-product-image$&fmt=auto",
                  "https://assets.specialized.com/i/specialized/95423-70_DIVERGE-E5-BRCH-WHTMTN_FDSQ?$scom-pdp-product-image$&fmt=auto",
                  "https://assets.specialized.com/i/specialized/95423-70_DIVERGE-E5-BRCH-WHTMTN_RDSQ?$scom-pdp-product-image$&fmt=auto",
                ],
              },
              {
                name: "Crux Com",
                id: uuidv4(),
                price: "4 922",
                images: [
                  "https://assets.specialized.com/i/specialized/91424-50_CRUX-COMP-VIVPNK-EGRN_HERO?$scom-pdp-product-image$&fmt=auto",
                  "https://assets.specialized.com/i/specialized/91424-50_CRUX-COMP-VIVPNK-EGRN_FDSQ?$scom-pdp-product-image$&fmt=auto",
                  "https://assets.specialized.com/i/specialized/91424-50_CRUX-COMP-VIVPNK-EGRN_RDSQ?$scom-pdp-product-image$&fmt=auto",
                ],
              },
            ],
          },
          {
            brand: "Pinarello",
            kind: "Pinarello",
            id: uuidv4(),
            models: [
              {
                name: "GREVIL F9",
                id: uuidv4(),
                price: "12 999",
                images: [
                  "https://pinarello.com/storage/Variant/cfd7942117c4576da94c78ebb20d48a1.png",
                  "https://pinarello.com/storage/ProductGallery/89d794cc716a06310a8d625d9b74fd6d.png",
                  "https://pinarello.com/storage/ProductGallery/1078b1bd76d70d2b0acb2deed8b40ba2.png",
                ],
              },
              {
                name: "GREVIL F7",
                id: uuidv4(),
                price: "10 000",
                images: [
                  "https://pinarello.com/storage/Variant/cce2bbf1e4611c10970b15588f5a7d64.png",
                  "https://pinarello.com/storage/ProductGallery/8f24b7394556d65eb3291154cba933d5.png",
                  "https://pinarello.com/storage/ProductGallery/269a660355df7cd8625ed5002b7675a4.png",
                ],
              },
              {
                name: "GRANGER X5 ",
                id: uuidv4(),
                price: "2 999",
                images: [
                  "https://pinarello.com/storage/Variant/12a67795e58ed5c19e2b3ddc2ba9c2d2.png",
                ],
              },
              {
                name: "NYTRO E5",
                id: uuidv4(),
                price: "4 989",
                images: [
                  "https://pinarello.com/storage/Variant/b6db46317fa30a29d7148adf3df8e903.png",
                  "https://pinarello.com/storage/ProductGallery/a2cd4e43371fc7a85ff9f184bc575c5c.png",
                  "https://pinarello.com/storage/ProductGallery/dad690970fc7f66b3fb636e29531bcb5.png",
                ],
              },
            ],
          },
        ],
      },
      {
        type: "Mtb",
        value: "mtb" as const,
        id: uuidv4(),
        href: `/products/bikes/mtb`,
        items: [
          {
            brand: "Canyon",
            kind: "Canyon",
            id: uuidv4(),
            models: [
              {
                name: "Neuron CF 8",
                id: uuidv4(),
                price: "3 100",
                images: [
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwe7398372/images/full/full_2023_/2023/full_2023_3170_neuron-cf-8_sr-bk_P5.jpg?sw=1300&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw71cbe0b2/images/detail/detail_202/2023/detail_2023_3170_neuron-cf-8_sr-bk_P5.jpg?sw=1300&sh=1300&sm=cut&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwaf257fb4/images/top/3170_TOP-1/2023/3170_TOP-1_neuron-cf-8_sr-bk_suspension.jpg?sw=1300&sh=1300&sm=cut&sfrm=jpg&q=80",
                ],
              },
              {
                name: "Lux World Cup CF 7",
                id: uuidv4(),
                price: "4 299",
                images: [
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwb7f49281/images/full/full_2022_/2022/full_2022_lux-world-cup-7_3138_P01_P5.jpg?sw=1300&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw12611d26/images/detail/detail_202/2022/detail_2022_lux-world-cup-7_3138_P01_P5.jpg?sw=1300&sh=1300&sm=cut&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw8c1da7dd/images/top/3138_TOP-2/2022/3138_TOP-2_lux-world-cup-7_P01_bottle-cages.jpg?sw=1300&sh=1300&sm=cut&sfrm=jpg&q=80",
                ],
              },
              {
                name: "Spectral:ON CF 8",
                id: uuidv4(),
                price: "5 999",
                images: [
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw267e85f4/images/full/full_2023_/2023/full_2023_3390_spectral-on-cf-8_P06_P5.jpg?sw=1300&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwacd63b07/images/detail/detail_202/2023/detail_2023_3390_spectral-on-cf-8_P06_P5.jpg?sw=1300&sh=1300&sm=cut&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw76268c44/images/top/3390_TOP-1/2023/3390_TOP-1_spectral-on-cf-8_P06_frame.jpg?sw=1300&sh=1300&sm=cut&sfrm=jpg&q=80",
                ],
              },
              {
                name: "Exceed CF SLX",
                id: uuidv4(),
                price: "4 819",
                images: [
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw01bb7933/images/full/full_2023_/2023/full_2023_3525_exceed-cf-slx-mvdp_P12_P5.jpg?sw=1300&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw4c1c5356/images/detail/detail_202/2023/detail_2023_3525_exceed-cf-slx-mvdp_P12_P5.jpg?sw=1300&sh=1300&sm=cut&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw8178f334/images/top/3525_TOP-1/2023/3525_TOP-1_exceed-cf-slx-mvdp_P12_frame_002.jpg?sw=1300&sh=1300&sm=cut&sfrm=jpg&q=80",
                ],
              },
              {
                name: "Neuron CF 9",
                id: uuidv4(),
                price: "5 780",
                images: [
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw2d5ac901/images/full/full_2023_/2023/full_2023_3172_neuron-cf-9_sr-bk_P5.jpg?sw=1300&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw0a93a135/images/detail/detail_202/2023/detail_2023_3172_neuron-cf-9_sr-bk_P5.jpg?sw=1300&sh=1300&sm=cut&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwdd70babd/images/top/3172_TOP-1/2023/3172_TOP-1_neuron-cf-9_sr-bk_suspension_014.jpg?sw=1300&sh=1300&sm=cut&sfrm=jpg&q=80",
                ],
              },
            ],
          },
          {
            brand: "Lapierre",
            kind: "Lapierre",
            id: uuidv4(),
            models: [
              {
                name: "Overvolt AM 8.7",
                id: uuidv4(),
                price: "6 799",
                images: [
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/5f/de/78/1703082708/Overvolt%20AM%208.7%20-%20Lapierre%20MY24%20-%20View%20(1).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/93/23/e7/1703082711/Overvolt%20AM%208.7%20-%20Lapierre%20MY24%20-%20View%20(2).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/0d/75/08/1703082706/Overvolt%20AM%208.7%20-%20Lapierre%20MY24%20-%20View%20(3).jpeg?force_format=webp",
                ],
              },
              {
                name: "Overvolt AM 7.7",
                id: uuidv4(),
                price: "6 199",
                images: [
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/81/d0/49/1707230666/Overvolt%20AM%207.7%20-%20Lapierre%20MY24%20-%20View%20(1).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/da/2f/66/1707230666/Overvolt%20AM%207.7%20-%20Lapierre%20MY24%20-%20View%20(2).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/7b/a6/55/1707230666/Overvolt%20AM%207.7%20-%20Lapierre%20MY24%20-%20View%20(3).jpeg?force_format=webp",
                ],
              },
              {
                name: "Overvolt AM 9.7",
                id: uuidv4(),
                price: "7 999",
                images: [
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/b5/1d/95/1691069341/LAPIERRE_MY23_OVERVOLT_AM_9.7.png?force_format=webp",
                ],
              },
            ],
          },
          {
            brand: "Trek",
            kind: "Trek",
            id: uuidv4(),
            models: [
              {
                name: "Supercaliber SLR 9.9",
                id: uuidv4(),
                price: "13 999",
                images: [
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/SupercaliberSLR99XXAXS-24-41725-C-Portrait",
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/SupercaliberSLR99XXAXS-24-41725-C-Alt1",
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/SupercaliberSLR99XXAXS-24-41725-C-Alt3",
                ],
              },
              {
                name: "Supercaliber SLR 9.8",
                id: uuidv4(),
                price: "8 999",
                images: [
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/SupercaliberSLR98XT-24-41721-C-Portrait",
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/SupercaliberSLR98XT-24-41721-C-Alt1",
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/SupercaliberSLR98XT-24-41721-C-Alt3",
                ],
              },
              {
                name: "Top Fuel 9.9",
                id: uuidv4(),
                price: "10 999",
                images: [
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/TopFuel99XXAXS-24-41651-B-Portrait",
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/TopFuel99XXAXS-24-41651-B-Alt1",
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/TopFuel99XXAXS-24-41651-B-Alt2",
                ],
              },
              {
                name: "Top Fuel 9.8 GX",
                id: uuidv4(),
                price: "5 999",
                images: [
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/TopFuel98GXAXS-24-41646-B-Portrait",
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/TopFuel98GXAXS-24-41646-B-Alt1",
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/TopFuel98GXAXS-24-41646-B-Alt2",
                ],
              },
            ],
          },
          {
            brand: "Specialized",
            kind: "Specialized",
            id: uuidv4(),
            models: [
              {
                name: "S-Works Turbo Kenevo",
                id: uuidv4(),
                price: "16 999",
                images: [
                  "https://assets.specialized.com/i/specialized/98023-00_KENEVO-SL-SW-CARBON-29-BLKLQDMET-BRSH-LQDMET_HERO?$scom-pdp-product-image$&fmt=auto",
                  "https://assets.specialized.com/i/specialized/98023-00_KENEVO-SL-SW-CARBON-29-BLKLQDMET-BRSH-LQDMET_FDSQ?$scom-pdp-product-image$&fmt=auto",
                  "https://assets.specialized.com/i/specialized/98023-00_KENEVO-SL-SW-CARBON-29-BLKLQDMET-BRSH-LQDMET_RDSQ?$scom-pdp-product-image$&fmt=auto",
                ],
              },
              {
                name: "S-Works Epic World Cup",
                id: uuidv4(),
                price: "12 890",
                images: [
                  "https://assets.specialized.com/i/specialized/93123-00_EPIC-WC-SW-REDTNT-FLKSIL-GRNT_HERO?$scom-pdp-product-image$&fmt=auto",
                  "https://assets.specialized.com/i/specialized/93123-00_EPIC-WC-SW-REDTNT-FLKSIL-GRNT_FDSQ?$scom-pdp-product-image$&fmt=auto",
                  "https://assets.specialized.com/i/specialized/93123-00_EPIC-WC-SW-REDTNT-FLKSIL-GRNT_RDSQ?$scom-pdp-product-image$&fmt=auto",
                ],
              },
              {
                name: "Epic 8 Pro",
                id: uuidv4(),
                price: "9 999",
                images: [
                  "https://assets.specialized.com/i/specialized/90324-10_EPIC-PRO-CARB-METSPHR-METWHTSIL_HERO?$scom-pdp-product-image$&fmt=auto",
                  "https://assets.specialized.com/i/specialized/90324-10_EPIC-PRO-CARB-METSPHR-METWHTSIL_FDSQ?$scom-pdp-product-image$&fmt=auto",
                  "https://assets.specialized.com/i/specialized/90324-10_EPIC-PRO-CARB-METSPHR-METWHTSIL_RDSQ?$scom-pdp-product-image$&fmt=auto",
                ],
              },
              {
                name: "Turbo Kenevo SL 2",
                id: uuidv4(),
                price: "7 990",
                images: [
                  "https://assets.specialized.com/i/specialized/98024-30_KENEVO-SL-EXPERT-CARBON-29-METSPR-SPR_HERO?$scom-pdp-product-image$&fmt=auto",
                  "https://assets.specialized.com/i/specialized/98024-30_KENEVO-SL-EXPERT-CARBON-29-METSPR-SPR_FDSQ?$scom-pdp-product-image$&fmt=auto",
                  "https://assets.specialized.com/i/specialized/98024-30_KENEVO-SL-EXPERT-CARBON-29-METSPR-SPR_RDSQ?$scom-pdp-product-image$&fmt=auto",
                ],
              },
              {
                name: "Demo Race",
                id: uuidv4(),
                price: "11 100",
                images: [
                  "https://assets.specialized.com/i/specialized/94524-70_DEMO-RACE-TLTNT-WHT_HERO?$scom-pdp-product-image$&fmt=auto",
                  "https://assets.specialized.com/i/specialized/94524-70_DEMO-RACE-TLTNT-WHT_FDSQ?$scom-pdp-product-image$&fmt=auto",
                  "https://assets.specialized.com/i/specialized/94524-70_DEMO-RACE-TLTNT-WHT_RDSQ?$scom-pdp-product-image$&fmt=auto",
                ],
              },
            ],
          },
          {
            brand: "Merida",
            kind: "Merida",
            id: uuidv4(),
            models: [
              {
                name: "ONE-SIXTY 10K",
                id: uuidv4(),
                price: "9 999",
                images: [
                  "https://d2lljesbicak00.cloudfront.net/merida-v2/crud-zoom-img//master/bikes/2024/ONE-SIXTY_10K_grnblk_MY24.tif?p3",
                ],
              },
              {
                name: "ONE-SIXTY 8000",
                id: uuidv4(),
                price: "7 000",
                images: [
                  "https://d2lljesbicak00.cloudfront.net/merida-v2/crud-zoom-img//master/bikes/2024/ONE-SIXTY_8000_blublk_MY24.tif?p3",
                ],
              },
              {
                name: "ONE-FORTY 6000",
                id: uuidv4(),
                price: "11 000",
                images: [
                  "https://d2lljesbicak00.cloudfront.net/merida-v2/crud-zoom-img//master/bikes/2024/ONE-FORTY_6000_blured_MY24.tif?p3",
                ],
              },
            ],
          },
        ],
      },
      {
        type: "e-Bike",
        value: "e-bike" as const,
        id: uuidv4(),
        href: `/products/bikes/e-bike`,
        items: [
          {
            brand: "Canyon",
            kind: "Canyon",
            id: uuidv4(),
            models: [
              {
                name: "Neuron:ON CF 7",
                id: uuidv4(),
                price: "4 999",
                images: [
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw4d0c89db/images/full/full_2023_/2023/full_2023_3961_neuron-on-cf-7_P02_P5.jpg?sw=1300&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwe7e06c99/images/detail/detail_202/2023/detail_2023_3961_neuron-on-cf-7_P02_P5.jpg?sw=1300&sh=1300&sm=cut&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwe382712f/images/top/3961_TOP-1/2023/3961_TOP-1_neuron-on-cf-7_P02_frame.jpg?sw=1300&sh=1300&sm=cut&sfrm=jpg&q=80",
                ],
              },
              {
                name: "Pathlite:ON 6 SUV ",
                id: uuidv4(),
                price: "3 999",
                images: [
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwa9c4163d/images/full/full_2024_/2023/full_2024_3596_pathlite-on-6-suv-st_gy_P5.jpg?sw=1300&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwcf4e93b7/images/detail/detail_202/2023/detail_2024_3596_pathlite-on-6-suv-st_gy_P5.jpg?sw=1300&sh=1300&sm=cut&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwaad0c758/images/top/3596_TOP-1/2023/3596_TOP-1_pathlite-on-6-suv-st_gy_engine_001.jpg?sw=1300&sh=1300&sm=cut&sfrm=jpg&q=80",
                ],
              },
              {
                name: "Pathlite:ON 5 SUV",
                id: uuidv4(),
                price: "4 299",
                images: [
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwcf928cd6/images/full/full_2024_/2023/full_2024_3595_pathlite-on-5-suv-st_og_P5.jpg?sw=1300&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw3503a005/images/detail/detail_202/2023/detail_2024_3595_pathlite-on-5-suv-st_og_P5.jpg?sw=1300&sh=1300&sm=cut&sfrm=png&q=90&bgcolor=F2F2F2",
                  "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw0b2f5f36/images/top/3595_TOP-1/2023/3595_TOP-1_pathlite-on-5-suv-st_og_engine.jpg?sw=1300&sh=1300&sm=cut&sfrm=jpg&q=80",
                ],
              },
            ],
          },
          {
            brand: "Pinarello",
            kind: "Pinarello",
            id: uuidv4(),
            models: [
              {
                name: "NYTRO E9 Gravel",
                id: uuidv4(),
                price: "14 890",
                images: [
                  "https://pinarello.com/storage/Variant/42d500ed92a21e20a15d054a578b939e.png",
                  "https://pinarello.com/storage/ProductGallery/ea38cfd874118bf8ca81b0af67ab583c.png",
                  "https://pinarello.com/storage/ProductGallery/7117ccfc8a24909c0fa35d22091e8c84.png",
                ],
              },
              {
                name: "NYTRO E5 ",
                id: uuidv4(),
                price: "9 999",
                images: [
                  "https://pinarello.com/storage/Variant/8fb8925b12bb9789ebfba548107657bd.png",
                ],
              },
              {
                name: "NYTRO E7 Road",
                id: uuidv4(),
                price: "11 000",
                images: [
                  "https://pinarello.com/storage/Variant/4c3e3710f9f6010c1af380e7c18f13f1.png",
                  "https://pinarello.com/storage/ProductGallery/18bfc46c3f842780002fcd654a27117b.png",
                  "https://pinarello.com/storage/ProductGallery/547c5fab769f28151fda073f33e8ecd8.png",
                ],
              },
              {
                name: "NYTRO E9 Road",
                id: uuidv4(),
                price: "12 999",
                images: [
                  "https://pinarello.com/storage/Variant/9acdb97942bf4770cb3b2fb33509af35.png",
                  "https://pinarello.com/storage/ProductGallery/2550806515ddb0aa931a93e60103af0f.png",
                  "https://pinarello.com/storage/ProductGallery/4a4ac8adec5a11719221fd8269bb3d64.png",
                ],
              },
              {
                name: "NYTRO E7 GRAVEL",
                id: uuidv4(),
                price: "17 010",
                images: [
                  "https://pinarello.com/storage/Variant/a5ffb7693f47217436b13137c89b5038.png",
                  "https://pinarello.com/storage/ProductGallery/02dbe859a5bb4135b6a3908570d4a5cd.png",
                  "https://pinarello.com/storage/ProductGallery/00b8db5f9d2b0b8200fbab1749e28d47.png",
                ],
              },
            ],
          },
          {
            brand: "Trek",
            kind: "Trek",
            id: uuidv4(),
            models: [
              {
                name: "Verve+ 5",
                id: uuidv4(),
                price: "5 200",
                images: [
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/VervePlus5Men-24-41026-A-Primary",
                ],
              },
              {
                name: "District+ 1 Lowstep",
                id: uuidv4(),
                price: "4 999",
                images: [
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/DistrictPlus1Low-24-41606-B-Primary",
                ],
              },
              {
                name: "District+ 5",
                id: uuidv4(),
                price: "7 019",
                images: [
                  "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/DistrictPlus5Low-24-41755-B-Primary",
                ],
              },
            ],
          },
          {
            brand: "Lapierre",
            kind: "Lapierre",
            id: uuidv4(),
            models: [
              {
                name: "Overvolt AM 7.7",
                id: uuidv4(),
                price: "6 199",
                images: [
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/81/d0/49/1707230666/Overvolt%20AM%207.7%20-%20Lapierre%20MY24%20-%20View%20(1).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/da/2f/66/1707230666/Overvolt%20AM%207.7%20-%20Lapierre%20MY24%20-%20View%20(2).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/7b/a6/55/1707230666/Overvolt%20AM%207.7%20-%20Lapierre%20MY24%20-%20View%20(3).jpeg?force_format=webp",
                ],
              },
              {
                name: "Overvolt AM 8.7",
                id: uuidv4(),
                price: "6 799",
                images: [
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/5f/de/78/1703082708/Overvolt%20AM%208.7%20-%20Lapierre%20MY24%20-%20View%20(1).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/93/23/e7/1703082711/Overvolt%20AM%208.7%20-%20Lapierre%20MY24%20-%20View%20(2).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/0d/75/08/1703082706/Overvolt%20AM%208.7%20-%20Lapierre%20MY24%20-%20View%20(3).jpeg?force_format=webp",
                ],
              },
              {
                name: "e-Urban 3.5",
                id: uuidv4(),
                price: "2 299",
                images: [
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/81/fd/61/1707230822/E-Urban%203.5%20-%20Lapierre%20MY24%20-%20View%20(1).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/0e/bb/df/1707230822/E-Urban%203.5%20-%20Lapierre%20MY24%20-%20View%20(2).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/44/56/4c/1707230822/E-Urban%203.5%20-%20Lapierre%20MY24%20-%20View%20(3).jpeg?force_format=webp",
                ],
              },
              {
                name: "e-Explorer 4.5 High",
                id: uuidv4(),
                price: "2 799",
                images: [
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/56/ba/1f/1707231079/E-Explorer%204.5%20High%20-%20Lapierre%20MY24%20-%20View%20(1).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/0a/e7/42/1707231079/E-Explorer%204.5%20High%20-%20Lapierre%20MY24%20-%20View%20(2).jpeg?force_format=webp",
                ],
              },
              {
                name: "e-Urban 4.5",
                id: uuidv4(),
                price: "2 699",
                images: [
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/69/ca/07/1703154042/E-Urban%204.5%20-%20Lapierre%20MY24%20-%20View%20(1).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/d3/e4/a4/1703154041/E-Urban%204.5%20-%20Lapierre%20MY24%20-%20View%20(2).jpeg?force_format=webp",
                  "https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/media/72/bb/c4/1703154041/E-Urban%204.5%20-%20Lapierre%20MY24%20-%20View%20(3).jpeg?force_format=webp",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    category: "Framesets",
    value: "framesets" as const,
    id: uuidv4(),
    featured: [
      {
        type: "Race",
        value: "race" as const,
        id: uuidv4(),
        href: `/products/framesets/race`,
        items: [
          {
            brand: "Bianchi",
            kind: "Bianchi",
            id: uuidv4(),
            models: [
              {
                name: "Oltre XR4 Frameset 2021",
                id: uuidv4(),
                price: "4 099",
                images: [
                  "https://bike-room.com/cdn/shop/files/bianchi-oltre-xr4-frameset-2021-753362_1220x_crop_center.jpg?v=1713366086",
                ],
              },
              {
                name: "Specialissima Disc 2023",
                id: uuidv4(),
                price: "4 299",
                images: [
                  "https://bike-room.com/cdn/shop/files/bianchi-specialissima-disc-2023-frameset-612212_1220x_crop_center.jpg?v=1713366088",
                ],
              },
            ],
          },
          {
            brand: "BMC",
            kind: "BMC",
            id: uuidv4(),
            models: [
              {
                name: "Teammachine SLR 01",
                id: uuidv4(),
                price: "4 999",
                images: [
                  "https://bike-room.com/cdn/shop/files/bmc-teammachine-slr-01-mod-2024-528542_1220x_crop_center.png?v=1713366632",
                ],
              },
            ],
          },
          {
            brand: "Cinelli",
            kind: "Cinelli",
            id: uuidv4(),
            models: [
              {
                name: "XCR Frameset 2024",
                id: uuidv4(),
                price: "2 999",
                images: [
                  "https://bike-room.com/cdn/shop/files/cinelli-xcr-frameset-2024-594224_1220x_crop_center.jpg?v=1713366755",
                ],
              },
            ],
          },
          {
            brand: "De Rosa",
            kind: "De Rosa",
            id: uuidv4(),
            models: [
              {
                name: "SK Pininfarina",
                id: uuidv4(),
                price: "3 299",
                images: [
                  "https://bike-room.com/cdn/shop/files/de-rosa-sk-pininfarina-size-46-viviani-edition-frameset-940808_1220x_crop_center.jpg?v=1713366958",
                ],
              },
            ],
          },
          {
            brand: "Look",
            kind: "Look",
            id: uuidv4(),
            models: [
              {
                name: "785 Huez Frameset 2022",
                id: uuidv4(),
                price: "1 299",
                images: [
                  "https://bike-room.com/cdn/shop/files/look-785-huez-frameset-2022-112137_1220x_crop_center.png?v=1713367057",
                ],
              },
            ],
          },
        ],
      },
      {
        type: "Triathlon",
        value: "triathlon" as const,
        id: uuidv4(),
        href: `/products/framesets/triathlon`,
        items: [
          {
            brand: "Look",
            kind: "Look",
            id: uuidv4(),
            models: [
              {
                name: "796 2023 Monoblade RS",
                id: uuidv4(),
                price: "4 999",
                images: [
                  "https://bike-room.com/cdn/shop/files/look-796-2023-monoblade-rs-frameset-carbon-752286_1220x_crop_center.jpg?v=1713367080",
                ],
              },
              {
                name: "796 Monoblade RS",
                id: uuidv4(),
                price: "6 099",
                images: [
                  "https://bike-room.com/cdn/shop/files/look-796-monoblade-rs-frameset-2024-189828_1220x_crop_center.jpg?v=1713367057",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    category: "Wheels",
    value: "wheels" as const,
    id: uuidv4(),
    featured: [
      {
        type: "Road",
        value: "road" as const,
        id: uuidv4(),
        href: `/products/wheels`,
        items: [
          {
            kind: "Mountain Routes",
            id: uuidv4(),
            models: [
              {
                brand: "Campagnolo",
                name: "Bora Ultra WTO 32mm",
                id: uuidv4(),
                price: "2 999",
                images: [
                  "https://bike-room.com/cdn/shop/files/campagnolo-bora-ultra-wto-33mm-disc-set-588297_1220x_crop_center.png?v=1713366717",
                ],
              },
              {
                brand: "Campagnolo",
                name: "Bora WTO 45mm",
                id: uuidv4(),
                price: "1 980",
                images: [
                  "https://bike-room.com/cdn/shop/files/campagnolo-bora-wto-45mm-rim-set-562026_1220x_crop_center.png?v=1713366718",
                ],
              },
              {
                brand: "Campagnolo",
                name: "Bora WTO 33mm",
                id: uuidv4(),
                price: "2 199",
                images: [
                  "https://bike-room.com/cdn/shop/files/campagnolo-bora-wto-33mm-disc-set-301700_1220x_crop_center.png?v=1713366716",
                ],
              },
              {
                brand: "Campagnolo",
                name: "Bora Ultra WTO 45mm",
                id: uuidv4(),
                price: "3 199",
                images: [
                  "https://bike-room.com/cdn/shop/files/campagnolo-bora-ultra-wto-45mm-disc-set-921805_1220x_crop_center.png?v=1713366717",
                ],
              },
              {
                brand: "Corima",
                name: "New WS EVO 32mm",
                id: uuidv4(),
                price: "1 799",
                images: [
                  "https://bike-room.com/cdn/shop/files/corima-new-ws-evo-32mm-28-disc-944409_1220x_crop_center.png?v=1713366756",
                ],
              },
              {
                brand: "DT Swiss",
                name: "ARC 1100 DICUT 48mm",
                id: uuidv4(),
                price: "1 099",
                images: [
                  "https://bike-room.com/cdn/shop/files/dt-swiss-arc-1100-dicut-48mm-rim-rear-410901_1220x_crop_center.jpg?v=1713366939",
                ],
              },
              {
                brand: "DT Swiss",
                name: "ARC 1100 DICUT 50mm",
                id: uuidv4(),
                price: "999",
                images: [
                  "https://bike-room.com/cdn/shop/files/dt-swiss-arc-1100-dicut-48mm-rim-front-270658_1220x_crop_center.jpg?v=1713366938",
                ],
              },
            ],
          },
          {
            kind: "Flat Routes",
            id: uuidv4(),
            models: [
              {
                brand: "Campagnolo",
                name: "Bora Ultra WTO 80mm",
                id: uuidv4(),
                price: "4 999",
                images: [
                  "https://bike-room.com/cdn/shop/files/campagnolo-bora-ultra-wto-80mm-disc-set-957560_1220x_crop_center.png?v=1713366717",
                ],
              },
              {
                brand: "Campagnolo",
                name: "Ghibli Lenticular Fixed",
                id: uuidv4(),
                price: "4 199",
                images: [
                  "https://bike-room.com/cdn/shop/files/campagnolo-ghibli-lenticular-fixed-rear-310870_1220x_crop_center.png?v=1713366717",
                ],
              },
              {
                brand: "DT Swiss",
                name: "ARC 1100 DICUT 80mm",
                id: uuidv4(),
                price: "1 299",
                images: [
                  "https://bike-room.com/cdn/shop/files/dt-swiss-arc-1100-dicut-80mm-rim-rear-778309_1220x_crop_center.jpg?v=1713366941",
                ],
              },
              {
                brand: "DT Swiss",
                name: "ARC 1100 DICUT Lenticular",
                id: uuidv4(),
                price: "2 199",
                images: [
                  "https://bike-room.com/cdn/shop/files/dt-swiss-arc-1100-dicut-lenticular-disc-rear-211971_1220x_crop_center.jpg?v=1713366941",
                ],
              },
              {
                brand: "Campagnolo",
                name: "Bora Ultra TT Lenticular",
                id: uuidv4(),
                price: "3 899",
                images: [
                  "https://bike-room.com/cdn/shop/files/campagnolo-bora-ultra-tt-lenticular-rim-rear-692116_1220x_crop_center.png?v=1713366715",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
