var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIReferenceOverlay_1 = new ol.layer.Tile({
            'title': 'ESRI Reference Overlay',
            //'type': 'base',
            'opacity': 0.450000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_FrewsburgSchoolDistrict_2 = new ol.format.GeoJSON();
var features_FrewsburgSchoolDistrict_2 = format_FrewsburgSchoolDistrict_2.readFeatures(json_FrewsburgSchoolDistrict_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrewsburgSchoolDistrict_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrewsburgSchoolDistrict_2.addFeatures(features_FrewsburgSchoolDistrict_2);
var lyr_FrewsburgSchoolDistrict_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrewsburgSchoolDistrict_2,
maxResolution:28004.466152261964,
 
                style: style_FrewsburgSchoolDistrict_2,
                popuplayertitle: "Frewsburg School District",
                interactive: false,
                title: '<img src="styles/legend/FrewsburgSchoolDistrict_2.png" /> Frewsburg School District'
            });
var format_JamestownSchoolDistrict_3 = new ol.format.GeoJSON();
var features_JamestownSchoolDistrict_3 = format_JamestownSchoolDistrict_3.readFeatures(json_JamestownSchoolDistrict_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JamestownSchoolDistrict_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JamestownSchoolDistrict_3.addFeatures(features_JamestownSchoolDistrict_3);
var lyr_JamestownSchoolDistrict_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JamestownSchoolDistrict_3,
maxResolution:28004.466152261964,
 
                style: style_JamestownSchoolDistrict_3,
                popuplayertitle: "Jamestown School District",
                interactive: false,
                title: '<img src="styles/legend/JamestownSchoolDistrict_3.png" /> Jamestown School District'
            });
var format_PanamaSchoolDistrict_4 = new ol.format.GeoJSON();
var features_PanamaSchoolDistrict_4 = format_PanamaSchoolDistrict_4.readFeatures(json_PanamaSchoolDistrict_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PanamaSchoolDistrict_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PanamaSchoolDistrict_4.addFeatures(features_PanamaSchoolDistrict_4);
var lyr_PanamaSchoolDistrict_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PanamaSchoolDistrict_4,
maxResolution:28004.466152261964,
 
                style: style_PanamaSchoolDistrict_4,
                popuplayertitle: "Panama School District",
                interactive: false,
                title: '<img src="styles/legend/PanamaSchoolDistrict_4.png" /> Panama School District'
            });
var format_BemusPointSchoolDistrict_5 = new ol.format.GeoJSON();
var features_BemusPointSchoolDistrict_5 = format_BemusPointSchoolDistrict_5.readFeatures(json_BemusPointSchoolDistrict_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BemusPointSchoolDistrict_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BemusPointSchoolDistrict_5.addFeatures(features_BemusPointSchoolDistrict_5);
var lyr_BemusPointSchoolDistrict_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BemusPointSchoolDistrict_5,
maxResolution:28004.466152261964,
 
                style: style_BemusPointSchoolDistrict_5,
                popuplayertitle: "Bemus Point School District",
                interactive: false,
                title: '<img src="styles/legend/BemusPointSchoolDistrict_5.png" /> Bemus Point School District'
            });
var format_BroctonSchoolDistrict_6 = new ol.format.GeoJSON();
var features_BroctonSchoolDistrict_6 = format_BroctonSchoolDistrict_6.readFeatures(json_BroctonSchoolDistrict_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BroctonSchoolDistrict_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BroctonSchoolDistrict_6.addFeatures(features_BroctonSchoolDistrict_6);
var lyr_BroctonSchoolDistrict_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BroctonSchoolDistrict_6,
maxResolution:28004.466152261964,
 
                style: style_BroctonSchoolDistrict_6,
                popuplayertitle: "Brocton School District",
                interactive: false,
                title: '<img src="styles/legend/BroctonSchoolDistrict_6.png" /> Brocton School District'
            });
var format_CassadagaSchoolDistrict_7 = new ol.format.GeoJSON();
var features_CassadagaSchoolDistrict_7 = format_CassadagaSchoolDistrict_7.readFeatures(json_CassadagaSchoolDistrict_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CassadagaSchoolDistrict_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CassadagaSchoolDistrict_7.addFeatures(features_CassadagaSchoolDistrict_7);
var lyr_CassadagaSchoolDistrict_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CassadagaSchoolDistrict_7,
maxResolution:28004.466152261964,
 
                style: style_CassadagaSchoolDistrict_7,
                popuplayertitle: "Cassadaga School District",
                interactive: false,
                title: '<img src="styles/legend/CassadagaSchoolDistrict_7.png" /> Cassadaga School District'
            });
var format_ClymerSchoolDistrict_8 = new ol.format.GeoJSON();
var features_ClymerSchoolDistrict_8 = format_ClymerSchoolDistrict_8.readFeatures(json_ClymerSchoolDistrict_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClymerSchoolDistrict_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClymerSchoolDistrict_8.addFeatures(features_ClymerSchoolDistrict_8);
var lyr_ClymerSchoolDistrict_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClymerSchoolDistrict_8,
maxResolution:28004.466152261964,
 
                style: style_ClymerSchoolDistrict_8,
                popuplayertitle: "Clymer School District",
                interactive: false,
                title: '<img src="styles/legend/ClymerSchoolDistrict_8.png" /> Clymer School District'
            });
var format_DunkirkSchoolDistrict_9 = new ol.format.GeoJSON();
var features_DunkirkSchoolDistrict_9 = format_DunkirkSchoolDistrict_9.readFeatures(json_DunkirkSchoolDistrict_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DunkirkSchoolDistrict_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DunkirkSchoolDistrict_9.addFeatures(features_DunkirkSchoolDistrict_9);
var lyr_DunkirkSchoolDistrict_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DunkirkSchoolDistrict_9,
maxResolution:28004.466152261964,
 
                style: style_DunkirkSchoolDistrict_9,
                popuplayertitle: "Dunkirk School District",
                interactive: false,
                title: '<img src="styles/legend/DunkirkSchoolDistrict_9.png" /> Dunkirk School District'
            });
var format_FalconerSchoolDistrict_10 = new ol.format.GeoJSON();
var features_FalconerSchoolDistrict_10 = format_FalconerSchoolDistrict_10.readFeatures(json_FalconerSchoolDistrict_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FalconerSchoolDistrict_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FalconerSchoolDistrict_10.addFeatures(features_FalconerSchoolDistrict_10);
var lyr_FalconerSchoolDistrict_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FalconerSchoolDistrict_10,
maxResolution:28004.466152261964,
 
                style: style_FalconerSchoolDistrict_10,
                popuplayertitle: "Falconer School District",
                interactive: false,
                title: '<img src="styles/legend/FalconerSchoolDistrict_10.png" /> Falconer School District'
            });
var format_ForestvilleSchoolDistrict_11 = new ol.format.GeoJSON();
var features_ForestvilleSchoolDistrict_11 = format_ForestvilleSchoolDistrict_11.readFeatures(json_ForestvilleSchoolDistrict_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ForestvilleSchoolDistrict_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForestvilleSchoolDistrict_11.addFeatures(features_ForestvilleSchoolDistrict_11);
var lyr_ForestvilleSchoolDistrict_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ForestvilleSchoolDistrict_11,
maxResolution:28004.466152261964,
 
                style: style_ForestvilleSchoolDistrict_11,
                popuplayertitle: "Forestville School District",
                interactive: false,
                title: '<img src="styles/legend/ForestvilleSchoolDistrict_11.png" /> Forestville School District'
            });
var format_FredoniaSchoolDistrict_12 = new ol.format.GeoJSON();
var features_FredoniaSchoolDistrict_12 = format_FredoniaSchoolDistrict_12.readFeatures(json_FredoniaSchoolDistrict_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FredoniaSchoolDistrict_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FredoniaSchoolDistrict_12.addFeatures(features_FredoniaSchoolDistrict_12);
var lyr_FredoniaSchoolDistrict_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FredoniaSchoolDistrict_12,
maxResolution:28004.466152261964,
 
                style: style_FredoniaSchoolDistrict_12,
                popuplayertitle: "Fredonia School District",
                interactive: false,
                title: '<img src="styles/legend/FredoniaSchoolDistrict_12.png" /> Fredonia School District'
            });
var format_PineValleySchoolDistrict_13 = new ol.format.GeoJSON();
var features_PineValleySchoolDistrict_13 = format_PineValleySchoolDistrict_13.readFeatures(json_PineValleySchoolDistrict_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PineValleySchoolDistrict_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PineValleySchoolDistrict_13.addFeatures(features_PineValleySchoolDistrict_13);
var lyr_PineValleySchoolDistrict_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PineValleySchoolDistrict_13,
maxResolution:28004.466152261964,
 
                style: style_PineValleySchoolDistrict_13,
                popuplayertitle: "Pine Valley School District",
                interactive: false,
                title: '<img src="styles/legend/PineValleySchoolDistrict_13.png" /> Pine Valley School District'
            });
var format_RipleySchoolDistrict_14 = new ol.format.GeoJSON();
var features_RipleySchoolDistrict_14 = format_RipleySchoolDistrict_14.readFeatures(json_RipleySchoolDistrict_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RipleySchoolDistrict_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RipleySchoolDistrict_14.addFeatures(features_RipleySchoolDistrict_14);
var lyr_RipleySchoolDistrict_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RipleySchoolDistrict_14,
maxResolution:28004.466152261964,
 
                style: style_RipleySchoolDistrict_14,
                popuplayertitle: "Ripley School District",
                interactive: false,
                title: '<img src="styles/legend/RipleySchoolDistrict_14.png" /> Ripley School District'
            });
var format_ShermanSchoolDistrict_15 = new ol.format.GeoJSON();
var features_ShermanSchoolDistrict_15 = format_ShermanSchoolDistrict_15.readFeatures(json_ShermanSchoolDistrict_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShermanSchoolDistrict_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShermanSchoolDistrict_15.addFeatures(features_ShermanSchoolDistrict_15);
var lyr_ShermanSchoolDistrict_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShermanSchoolDistrict_15,
maxResolution:28004.466152261964,
 
                style: style_ShermanSchoolDistrict_15,
                popuplayertitle: "Sherman School District",
                interactive: false,
                title: '<img src="styles/legend/ShermanSchoolDistrict_15.png" /> Sherman School District'
            });
var format_SilverCreekSchoolDistrict_16 = new ol.format.GeoJSON();
var features_SilverCreekSchoolDistrict_16 = format_SilverCreekSchoolDistrict_16.readFeatures(json_SilverCreekSchoolDistrict_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SilverCreekSchoolDistrict_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SilverCreekSchoolDistrict_16.addFeatures(features_SilverCreekSchoolDistrict_16);
var lyr_SilverCreekSchoolDistrict_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SilverCreekSchoolDistrict_16,
maxResolution:28004.466152261964,
 
                style: style_SilverCreekSchoolDistrict_16,
                popuplayertitle: "Silver Creek School District",
                interactive: false,
                title: '<img src="styles/legend/SilverCreekSchoolDistrict_16.png" /> Silver Creek School District'
            });
var format_SouthwesternSchoolDistrict_17 = new ol.format.GeoJSON();
var features_SouthwesternSchoolDistrict_17 = format_SouthwesternSchoolDistrict_17.readFeatures(json_SouthwesternSchoolDistrict_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthwesternSchoolDistrict_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SouthwesternSchoolDistrict_17.addFeatures(features_SouthwesternSchoolDistrict_17);
var lyr_SouthwesternSchoolDistrict_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SouthwesternSchoolDistrict_17,
maxResolution:28004.466152261964,
 
                style: style_SouthwesternSchoolDistrict_17,
                popuplayertitle: "Southwestern School District",
                interactive: false,
                title: '<img src="styles/legend/SouthwesternSchoolDistrict_17.png" /> Southwestern School District'
            });
var format_WestfieldSchoolDistrict_18 = new ol.format.GeoJSON();
var features_WestfieldSchoolDistrict_18 = format_WestfieldSchoolDistrict_18.readFeatures(json_WestfieldSchoolDistrict_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WestfieldSchoolDistrict_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WestfieldSchoolDistrict_18.addFeatures(features_WestfieldSchoolDistrict_18);
var lyr_WestfieldSchoolDistrict_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WestfieldSchoolDistrict_18,
maxResolution:28004.466152261964,
 
                style: style_WestfieldSchoolDistrict_18,
                popuplayertitle: "Westfield School District",
                interactive: false,
                title: '<img src="styles/legend/WestfieldSchoolDistrict_18.png" /> Westfield School District'
            });
var format_ChautauquaLakeSchoolDistrict_19 = new ol.format.GeoJSON();
var features_ChautauquaLakeSchoolDistrict_19 = format_ChautauquaLakeSchoolDistrict_19.readFeatures(json_ChautauquaLakeSchoolDistrict_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChautauquaLakeSchoolDistrict_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChautauquaLakeSchoolDistrict_19.addFeatures(features_ChautauquaLakeSchoolDistrict_19);
var lyr_ChautauquaLakeSchoolDistrict_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChautauquaLakeSchoolDistrict_19,
maxResolution:28004.466152261964,
 
                style: style_ChautauquaLakeSchoolDistrict_19,
                popuplayertitle: "Chautauqua Lake School District",
                interactive: false,
                title: '<img src="styles/legend/ChautauquaLakeSchoolDistrict_19.png" /> Chautauqua Lake School District'
            });
var format_ChautauquaCounty_Public_School_District_Boundaries_20 = new ol.format.GeoJSON();
var features_ChautauquaCounty_Public_School_District_Boundaries_20 = format_ChautauquaCounty_Public_School_District_Boundaries_20.readFeatures(json_ChautauquaCounty_Public_School_District_Boundaries_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChautauquaCounty_Public_School_District_Boundaries_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChautauquaCounty_Public_School_District_Boundaries_20.addFeatures(features_ChautauquaCounty_Public_School_District_Boundaries_20);
var lyr_ChautauquaCounty_Public_School_District_Boundaries_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChautauquaCounty_Public_School_District_Boundaries_20, 
                style: style_ChautauquaCounty_Public_School_District_Boundaries_20,
                popuplayertitle: "Chautauqua County_Public_School_District_Boundaries",
                interactive: false,
                title: '<img src="styles/legend/ChautauquaCounty_Public_School_District_Boundaries_20.png" /> Chautauqua County_Public_School_District_Boundaries'
            });
var format_Census3085_21 = new ol.format.GeoJSON();
var features_Census3085_21 = format_Census3085_21.readFeatures(json_Census3085_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3085_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3085_21.addFeatures(features_Census3085_21);
var lyr_Census3085_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3085_21, 
                style: style_Census3085_21,
                popuplayertitle: "Census 308-5",
                interactive: false,
                title: '<img src="styles/legend/Census3085_21.png" /> Census 308-5'
            });
var format_Census3084_22 = new ol.format.GeoJSON();
var features_Census3084_22 = format_Census3084_22.readFeatures(json_Census3084_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3084_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3084_22.addFeatures(features_Census3084_22);
var lyr_Census3084_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3084_22, 
                style: style_Census3084_22,
                popuplayertitle: "Census 308-4",
                interactive: false,
                title: '<img src="styles/legend/Census3084_22.png" /> Census 308-4'
            });
var format_Census3083_23 = new ol.format.GeoJSON();
var features_Census3083_23 = format_Census3083_23.readFeatures(json_Census3083_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3083_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3083_23.addFeatures(features_Census3083_23);
var lyr_Census3083_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3083_23, 
                style: style_Census3083_23,
                popuplayertitle: "Census 308-3",
                interactive: false,
                title: '<img src="styles/legend/Census3083_23.png" /> Census 308-3'
            });
var format_Census3082_24 = new ol.format.GeoJSON();
var features_Census3082_24 = format_Census3082_24.readFeatures(json_Census3082_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3082_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3082_24.addFeatures(features_Census3082_24);
var lyr_Census3082_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3082_24, 
                style: style_Census3082_24,
                popuplayertitle: "Census 308-2",
                interactive: false,
                title: '<img src="styles/legend/Census3082_24.png" /> Census 308-2'
            });
var format_Census3081_25 = new ol.format.GeoJSON();
var features_Census3081_25 = format_Census3081_25.readFeatures(json_Census3081_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3081_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3081_25.addFeatures(features_Census3081_25);
var lyr_Census3081_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3081_25, 
                style: style_Census3081_25,
                popuplayertitle: "Census 308-1",
                interactive: false,
                title: '<img src="styles/legend/Census3081_25.png" /> Census 308-1'
            });
var format_Census3075_26 = new ol.format.GeoJSON();
var features_Census3075_26 = format_Census3075_26.readFeatures(json_Census3075_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3075_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3075_26.addFeatures(features_Census3075_26);
var lyr_Census3075_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3075_26, 
                style: style_Census3075_26,
                popuplayertitle: "Census 307-5",
                interactive: false,
                title: '<img src="styles/legend/Census3075_26.png" /> Census 307-5'
            });
var format_Census3074_27 = new ol.format.GeoJSON();
var features_Census3074_27 = format_Census3074_27.readFeatures(json_Census3074_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3074_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3074_27.addFeatures(features_Census3074_27);
var lyr_Census3074_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3074_27, 
                style: style_Census3074_27,
                popuplayertitle: "Census 307-4",
                interactive: false,
                title: '<img src="styles/legend/Census3074_27.png" /> Census 307-4'
            });
var format_Census3073_28 = new ol.format.GeoJSON();
var features_Census3073_28 = format_Census3073_28.readFeatures(json_Census3073_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3073_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3073_28.addFeatures(features_Census3073_28);
var lyr_Census3073_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3073_28, 
                style: style_Census3073_28,
                popuplayertitle: "Census 307-3",
                interactive: false,
                title: '<img src="styles/legend/Census3073_28.png" /> Census 307-3'
            });
var format_Census3072_29 = new ol.format.GeoJSON();
var features_Census3072_29 = format_Census3072_29.readFeatures(json_Census3072_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3072_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3072_29.addFeatures(features_Census3072_29);
var lyr_Census3072_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3072_29, 
                style: style_Census3072_29,
                popuplayertitle: "Census 307-2",
                interactive: false,
                title: '<img src="styles/legend/Census3072_29.png" /> Census 307-2'
            });
var format_Census3071_30 = new ol.format.GeoJSON();
var features_Census3071_30 = format_Census3071_30.readFeatures(json_Census3071_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3071_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3071_30.addFeatures(features_Census3071_30);
var lyr_Census3071_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3071_30, 
                style: style_Census3071_30,
                popuplayertitle: "Census 307-1",
                interactive: false,
                title: '<img src="styles/legend/Census3071_30.png" /> Census 307-1'
            });
var format_Census3064_31 = new ol.format.GeoJSON();
var features_Census3064_31 = format_Census3064_31.readFeatures(json_Census3064_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3064_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3064_31.addFeatures(features_Census3064_31);
var lyr_Census3064_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3064_31, 
                style: style_Census3064_31,
                popuplayertitle: "Census 306-4",
                interactive: false,
                title: '<img src="styles/legend/Census3064_31.png" /> Census 306-4'
            });
var format_Census3063_32 = new ol.format.GeoJSON();
var features_Census3063_32 = format_Census3063_32.readFeatures(json_Census3063_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3063_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3063_32.addFeatures(features_Census3063_32);
var lyr_Census3063_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3063_32, 
                style: style_Census3063_32,
                popuplayertitle: "Census 306-3",
                interactive: false,
                title: '<img src="styles/legend/Census3063_32.png" /> Census 306-3'
            });
var format_Census3062_33 = new ol.format.GeoJSON();
var features_Census3062_33 = format_Census3062_33.readFeatures(json_Census3062_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3062_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3062_33.addFeatures(features_Census3062_33);
var lyr_Census3062_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3062_33, 
                style: style_Census3062_33,
                popuplayertitle: "Census 306-2",
                interactive: false,
                title: '<img src="styles/legend/Census3062_33.png" /> Census 306-2'
            });
var format_Census3061_34 = new ol.format.GeoJSON();
var features_Census3061_34 = format_Census3061_34.readFeatures(json_Census3061_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3061_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3061_34.addFeatures(features_Census3061_34);
var lyr_Census3061_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3061_34, 
                style: style_Census3061_34,
                popuplayertitle: "Census 306-1",
                interactive: false,
                title: '<img src="styles/legend/Census3061_34.png" /> Census 306-1'
            });
var format_Census3055_35 = new ol.format.GeoJSON();
var features_Census3055_35 = format_Census3055_35.readFeatures(json_Census3055_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3055_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3055_35.addFeatures(features_Census3055_35);
var lyr_Census3055_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3055_35, 
                style: style_Census3055_35,
                popuplayertitle: "Census 305-5",
                interactive: false,
                title: '<img src="styles/legend/Census3055_35.png" /> Census 305-5'
            });
var format_Census3054_36 = new ol.format.GeoJSON();
var features_Census3054_36 = format_Census3054_36.readFeatures(json_Census3054_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3054_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3054_36.addFeatures(features_Census3054_36);
var lyr_Census3054_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3054_36, 
                style: style_Census3054_36,
                popuplayertitle: "Census 305-4",
                interactive: false,
                title: '<img src="styles/legend/Census3054_36.png" /> Census 305-4'
            });
var format_Census3053_37 = new ol.format.GeoJSON();
var features_Census3053_37 = format_Census3053_37.readFeatures(json_Census3053_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3053_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3053_37.addFeatures(features_Census3053_37);
var lyr_Census3053_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3053_37, 
                style: style_Census3053_37,
                popuplayertitle: "Census 305-3",
                interactive: false,
                title: '<img src="styles/legend/Census3053_37.png" /> Census 305-3'
            });
var format_Census3052_38 = new ol.format.GeoJSON();
var features_Census3052_38 = format_Census3052_38.readFeatures(json_Census3052_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3052_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3052_38.addFeatures(features_Census3052_38);
var lyr_Census3052_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3052_38, 
                style: style_Census3052_38,
                popuplayertitle: "Census 305-2",
                interactive: false,
                title: '<img src="styles/legend/Census3052_38.png" /> Census 305-2'
            });
var format_Census3051_39 = new ol.format.GeoJSON();
var features_Census3051_39 = format_Census3051_39.readFeatures(json_Census3051_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3051_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3051_39.addFeatures(features_Census3051_39);
var lyr_Census3051_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3051_39, 
                style: style_Census3051_39,
                popuplayertitle: "Census 305-1",
                interactive: false,
                title: '<img src="styles/legend/Census3051_39.png" /> Census 305-1'
            });
var format_Census3044_40 = new ol.format.GeoJSON();
var features_Census3044_40 = format_Census3044_40.readFeatures(json_Census3044_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3044_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3044_40.addFeatures(features_Census3044_40);
var lyr_Census3044_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3044_40, 
                style: style_Census3044_40,
                popuplayertitle: "Census 304-4",
                interactive: false,
                title: '<img src="styles/legend/Census3044_40.png" /> Census 304-4'
            });
var format_Census3043_41 = new ol.format.GeoJSON();
var features_Census3043_41 = format_Census3043_41.readFeatures(json_Census3043_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3043_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3043_41.addFeatures(features_Census3043_41);
var lyr_Census3043_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3043_41, 
                style: style_Census3043_41,
                popuplayertitle: "Census 304-3",
                interactive: false,
                title: '<img src="styles/legend/Census3043_41.png" /> Census 304-3'
            });
var format_Census3042_42 = new ol.format.GeoJSON();
var features_Census3042_42 = format_Census3042_42.readFeatures(json_Census3042_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3042_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3042_42.addFeatures(features_Census3042_42);
var lyr_Census3042_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3042_42, 
                style: style_Census3042_42,
                popuplayertitle: "Census 304-2",
                interactive: false,
                title: '<img src="styles/legend/Census3042_42.png" /> Census 304-2'
            });
var format_Census3041_43 = new ol.format.GeoJSON();
var features_Census3041_43 = format_Census3041_43.readFeatures(json_Census3041_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3041_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3041_43.addFeatures(features_Census3041_43);
var lyr_Census3041_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3041_43, 
                style: style_Census3041_43,
                popuplayertitle: "Census 304-1",
                interactive: false,
                title: '<img src="styles/legend/Census3041_43.png" /> Census 304-1'
            });
var format_Census3032_44 = new ol.format.GeoJSON();
var features_Census3032_44 = format_Census3032_44.readFeatures(json_Census3032_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3032_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3032_44.addFeatures(features_Census3032_44);
var lyr_Census3032_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3032_44, 
                style: style_Census3032_44,
                popuplayertitle: "Census 303-2",
                interactive: false,
                title: '<img src="styles/legend/Census3032_44.png" /> Census 303-2'
            });
var format_Census3031_45 = new ol.format.GeoJSON();
var features_Census3031_45 = format_Census3031_45.readFeatures(json_Census3031_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3031_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3031_45.addFeatures(features_Census3031_45);
var lyr_Census3031_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3031_45, 
                style: style_Census3031_45,
                popuplayertitle: "Census 303-1",
                interactive: false,
                title: '<img src="styles/legend/Census3031_45.png" /> Census 303-1'
            });
var format_Census3025_46 = new ol.format.GeoJSON();
var features_Census3025_46 = format_Census3025_46.readFeatures(json_Census3025_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3025_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3025_46.addFeatures(features_Census3025_46);
var lyr_Census3025_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3025_46, 
                style: style_Census3025_46,
                popuplayertitle: "Census 302-5",
                interactive: false,
                title: '<img src="styles/legend/Census3025_46.png" /> Census 302-5'
            });
var format_Census3024_47 = new ol.format.GeoJSON();
var features_Census3024_47 = format_Census3024_47.readFeatures(json_Census3024_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3024_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3024_47.addFeatures(features_Census3024_47);
var lyr_Census3024_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3024_47, 
                style: style_Census3024_47,
                popuplayertitle: "Census 302-4",
                interactive: false,
                title: '<img src="styles/legend/Census3024_47.png" /> Census 302-4'
            });
var format_Census3023_48 = new ol.format.GeoJSON();
var features_Census3023_48 = format_Census3023_48.readFeatures(json_Census3023_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3023_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3023_48.addFeatures(features_Census3023_48);
var lyr_Census3023_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3023_48, 
                style: style_Census3023_48,
                popuplayertitle: "Census 302-3",
                interactive: false,
                title: '<img src="styles/legend/Census3023_48.png" /> Census 302-3'
            });
var format_Census3022_49 = new ol.format.GeoJSON();
var features_Census3022_49 = format_Census3022_49.readFeatures(json_Census3022_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3022_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3022_49.addFeatures(features_Census3022_49);
var lyr_Census3022_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3022_49, 
                style: style_Census3022_49,
                popuplayertitle: "Census 302-2",
                interactive: false,
                title: '<img src="styles/legend/Census3022_49.png" /> Census 302-2'
            });
var format_Census3021_50 = new ol.format.GeoJSON();
var features_Census3021_50 = format_Census3021_50.readFeatures(json_Census3021_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3021_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3021_50.addFeatures(features_Census3021_50);
var lyr_Census3021_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3021_50, 
                style: style_Census3021_50,
                popuplayertitle: "Census 302-1",
                interactive: false,
                title: '<img src="styles/legend/Census3021_50.png" /> Census 302-1'
            });
var format_Census3011_51 = new ol.format.GeoJSON();
var features_Census3011_51 = format_Census3011_51.readFeatures(json_Census3011_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3011_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3011_51.addFeatures(features_Census3011_51);
var lyr_Census3011_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3011_51, 
                style: style_Census3011_51,
                popuplayertitle: "Census 301-1",
                interactive: false,
                title: '<img src="styles/legend/Census3011_51.png" /> Census 301-1'
            });
var format_Census3012_52 = new ol.format.GeoJSON();
var features_Census3012_52 = format_Census3012_52.readFeatures(json_Census3012_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3012_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3012_52.addFeatures(features_Census3012_52);
var lyr_Census3012_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3012_52, 
                style: style_Census3012_52,
                popuplayertitle: "Census 301-2",
                interactive: false,
                title: '<img src="styles/legend/Census3012_52.png" /> Census 301-2'
            });
var format_Census3013_53 = new ol.format.GeoJSON();
var features_Census3013_53 = format_Census3013_53.readFeatures(json_Census3013_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3013_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3013_53.addFeatures(features_Census3013_53);
var lyr_Census3013_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3013_53, 
                style: style_Census3013_53,
                popuplayertitle: "Census 301-3",
                interactive: false,
                title: '<img src="styles/legend/Census3013_53.png" /> Census 301-3'
            });
var format_Census3014_54 = new ol.format.GeoJSON();
var features_Census3014_54 = format_Census3014_54.readFeatures(json_Census3014_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3014_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3014_54.addFeatures(features_Census3014_54);
var lyr_Census3014_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3014_54, 
                style: style_Census3014_54,
                popuplayertitle: "Census 301-4",
                interactive: false,
                title: '<img src="styles/legend/Census3014_54.png" /> Census 301-4'
            });
var format_LoveSchoolneighborhoods_55 = new ol.format.GeoJSON();
var features_LoveSchoolneighborhoods_55 = format_LoveSchoolneighborhoods_55.readFeatures(json_LoveSchoolneighborhoods_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoveSchoolneighborhoods_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoveSchoolneighborhoods_55.addFeatures(features_LoveSchoolneighborhoods_55);
var lyr_LoveSchoolneighborhoods_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoveSchoolneighborhoods_55, 
                style: style_LoveSchoolneighborhoods_55,
                popuplayertitle: "Love School neighborhoods",
                interactive: false,
                title: '<img src="styles/legend/LoveSchoolneighborhoods_55.png" /> Love School neighborhoods'
            });
var format_Counties_Shoreline_56 = new ol.format.GeoJSON();
var features_Counties_Shoreline_56 = format_Counties_Shoreline_56.readFeatures(json_Counties_Shoreline_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Counties_Shoreline_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Counties_Shoreline_56.addFeatures(features_Counties_Shoreline_56);
var lyr_Counties_Shoreline_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Counties_Shoreline_56, 
                style: style_Counties_Shoreline_56,
                popuplayertitle: "Counties_Shoreline",
                interactive: false,
                title: '<img src="styles/legend/Counties_Shoreline_56.png" /> Counties_Shoreline'
            });
var format_ChautauquaCountySchools_57 = new ol.format.GeoJSON();
var features_ChautauquaCountySchools_57 = format_ChautauquaCountySchools_57.readFeatures(json_ChautauquaCountySchools_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChautauquaCountySchools_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChautauquaCountySchools_57.addFeatures(features_ChautauquaCountySchools_57);
var lyr_ChautauquaCountySchools_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChautauquaCountySchools_57,
maxResolution:36.405805997940554,
 
                style: style_ChautauquaCountySchools_57,
                popuplayertitle: "Chautauqua County Schools",
                interactive: true,
                title: '<img src="styles/legend/ChautauquaCountySchools_57.png" /> Chautauqua County Schools'
            });
var format_SELschools2024TGFDonly_58 = new ol.format.GeoJSON();
var features_SELschools2024TGFDonly_58 = format_SELschools2024TGFDonly_58.readFeatures(json_SELschools2024TGFDonly_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SELschools2024TGFDonly_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SELschools2024TGFDonly_58.addFeatures(features_SELschools2024TGFDonly_58);
var lyr_SELschools2024TGFDonly_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SELschools2024TGFDonly_58,
maxResolution:148.4236706069884,
 
                style: style_SELschools2024TGFDonly_58,
                popuplayertitle: "SEL schools 2024 - TGFD only",
                interactive: false,
                title: '<img src="styles/legend/SELschools2024TGFDonly_58.png" /> SEL schools 2024 - TGFD only'
            });
var format_SELschools2024PAXonly_59 = new ol.format.GeoJSON();
var features_SELschools2024PAXonly_59 = format_SELschools2024PAXonly_59.readFeatures(json_SELschools2024PAXonly_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SELschools2024PAXonly_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SELschools2024PAXonly_59.addFeatures(features_SELschools2024PAXonly_59);
var lyr_SELschools2024PAXonly_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SELschools2024PAXonly_59,
maxResolution:148.4236706069884,
 
                style: style_SELschools2024PAXonly_59,
                popuplayertitle: "SEL schools 2024 - PAX only",
                interactive: false,
                title: '<img src="styles/legend/SELschools2024PAXonly_59.png" /> SEL schools 2024 - PAX only'
            });
var format_SELschools2024SOSonly_60 = new ol.format.GeoJSON();
var features_SELschools2024SOSonly_60 = format_SELschools2024SOSonly_60.readFeatures(json_SELschools2024SOSonly_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SELschools2024SOSonly_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SELschools2024SOSonly_60.addFeatures(features_SELschools2024SOSonly_60);
var lyr_SELschools2024SOSonly_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SELschools2024SOSonly_60, 
                style: style_SELschools2024SOSonly_60,
                popuplayertitle: "SEL schools 2024 - SOS only",
                interactive: false,
                title: '<img src="styles/legend/SELschools2024SOSonly_60.png" /> SEL schools 2024 - SOS only'
            });
var group_Censustract301423 = new ol.layer.Group({
                                layers: [lyr_Census3011_51,lyr_Census3012_52,lyr_Census3013_53,lyr_Census3014_54,],
                                fold: "open",
                                title: "Census tract 301 42.3"});
var group_Censustract302367 = new ol.layer.Group({
                                layers: [lyr_Census3025_46,lyr_Census3024_47,lyr_Census3023_48,lyr_Census3022_49,lyr_Census3021_50,],
                                fold: "open",
                                title: "Census tract 302 - 36.7%"});
var group_Censustract303335 = new ol.layer.Group({
                                layers: [lyr_Census3032_44,lyr_Census3031_45,],
                                fold: "open",
                                title: "Census tract 303 - 33.5%"});
var group_Censustract30454 = new ol.layer.Group({
                                layers: [lyr_Census3044_40,lyr_Census3043_41,lyr_Census3042_42,lyr_Census3041_43,],
                                fold: "open",
                                title: "Census tract 304 - 5.4%"});
var group_Censustract305454 = new ol.layer.Group({
                                layers: [lyr_Census3055_35,lyr_Census3054_36,lyr_Census3053_37,lyr_Census3052_38,lyr_Census3051_39,],
                                fold: "open",
                                title: "Census tract 305 - 45.4%"});
var group_Censustract306326 = new ol.layer.Group({
                                layers: [lyr_Census3064_31,lyr_Census3063_32,lyr_Census3062_33,lyr_Census3061_34,],
                                fold: "open",
                                title: "Census tract 306 - 32.6%"});
var group_Censustract307195 = new ol.layer.Group({
                                layers: [lyr_Census3075_26,lyr_Census3074_27,lyr_Census3073_28,lyr_Census3072_29,lyr_Census3071_30,],
                                fold: "open",
                                title: "Census tract 307 - 19.5%"});
var group_Censustract308205 = new ol.layer.Group({
                                layers: [lyr_Census3085_21,lyr_Census3084_22,lyr_Census3083_23,lyr_Census3082_24,lyr_Census3081_25,],
                                fold: "open",
                                title: "Census tract 308 - 20.5%"});
var group_Schooldistricts = new ol.layer.Group({
                                layers: [lyr_FrewsburgSchoolDistrict_2,lyr_JamestownSchoolDistrict_3,lyr_PanamaSchoolDistrict_4,lyr_BemusPointSchoolDistrict_5,lyr_BroctonSchoolDistrict_6,lyr_CassadagaSchoolDistrict_7,lyr_ClymerSchoolDistrict_8,lyr_DunkirkSchoolDistrict_9,lyr_FalconerSchoolDistrict_10,lyr_ForestvilleSchoolDistrict_11,lyr_FredoniaSchoolDistrict_12,lyr_PineValleySchoolDistrict_13,lyr_RipleySchoolDistrict_14,lyr_ShermanSchoolDistrict_15,lyr_SilverCreekSchoolDistrict_16,lyr_SouthwesternSchoolDistrict_17,lyr_WestfieldSchoolDistrict_18,lyr_ChautauquaLakeSchoolDistrict_19,lyr_ChautauquaCounty_Public_School_District_Boundaries_20,],
                                fold: "open",
                                title: "School districts"});

lyr_GoogleSatellite_0.setVisible(true);lyr_ESRIReferenceOverlay_1.setVisible(true);lyr_FrewsburgSchoolDistrict_2.setVisible(true);lyr_JamestownSchoolDistrict_3.setVisible(true);lyr_PanamaSchoolDistrict_4.setVisible(true);lyr_BemusPointSchoolDistrict_5.setVisible(true);lyr_BroctonSchoolDistrict_6.setVisible(true);lyr_CassadagaSchoolDistrict_7.setVisible(true);lyr_ClymerSchoolDistrict_8.setVisible(true);lyr_DunkirkSchoolDistrict_9.setVisible(true);lyr_FalconerSchoolDistrict_10.setVisible(true);lyr_ForestvilleSchoolDistrict_11.setVisible(true);lyr_FredoniaSchoolDistrict_12.setVisible(true);lyr_PineValleySchoolDistrict_13.setVisible(true);lyr_RipleySchoolDistrict_14.setVisible(true);lyr_ShermanSchoolDistrict_15.setVisible(true);lyr_SilverCreekSchoolDistrict_16.setVisible(true);lyr_SouthwesternSchoolDistrict_17.setVisible(true);lyr_WestfieldSchoolDistrict_18.setVisible(true);lyr_ChautauquaLakeSchoolDistrict_19.setVisible(true);lyr_ChautauquaCounty_Public_School_District_Boundaries_20.setVisible(true);lyr_Census3085_21.setVisible(true);lyr_Census3084_22.setVisible(true);lyr_Census3083_23.setVisible(true);lyr_Census3082_24.setVisible(true);lyr_Census3081_25.setVisible(true);lyr_Census3075_26.setVisible(true);lyr_Census3074_27.setVisible(true);lyr_Census3073_28.setVisible(true);lyr_Census3072_29.setVisible(true);lyr_Census3071_30.setVisible(true);lyr_Census3064_31.setVisible(true);lyr_Census3063_32.setVisible(true);lyr_Census3062_33.setVisible(true);lyr_Census3061_34.setVisible(true);lyr_Census3055_35.setVisible(true);lyr_Census3054_36.setVisible(true);lyr_Census3053_37.setVisible(true);lyr_Census3052_38.setVisible(true);lyr_Census3051_39.setVisible(true);lyr_Census3044_40.setVisible(true);lyr_Census3043_41.setVisible(true);lyr_Census3042_42.setVisible(true);lyr_Census3041_43.setVisible(true);lyr_Census3032_44.setVisible(true);lyr_Census3031_45.setVisible(true);lyr_Census3025_46.setVisible(true);lyr_Census3024_47.setVisible(true);lyr_Census3023_48.setVisible(true);lyr_Census3022_49.setVisible(true);lyr_Census3021_50.setVisible(true);lyr_Census3011_51.setVisible(true);lyr_Census3012_52.setVisible(true);lyr_Census3013_53.setVisible(true);lyr_Census3014_54.setVisible(true);lyr_LoveSchoolneighborhoods_55.setVisible(true);lyr_Counties_Shoreline_56.setVisible(true);lyr_ChautauquaCountySchools_57.setVisible(true);lyr_SELschools2024TGFDonly_58.setVisible(true);lyr_SELschools2024PAXonly_59.setVisible(true);lyr_SELschools2024SOSonly_60.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ESRIReferenceOverlay_1,group_Schooldistricts,group_Censustract308205,group_Censustract307195,group_Censustract306326,group_Censustract305454,group_Censustract30454,group_Censustract303335,group_Censustract302367,group_Censustract301423,lyr_LoveSchoolneighborhoods_55,lyr_Counties_Shoreline_56,lyr_ChautauquaCountySchools_57,lyr_SELschools2024TGFDonly_58,lyr_SELschools2024PAXonly_59,lyr_SELschools2024SOSonly_60];
lyr_FrewsburgSchoolDistrict_2.set('fieldAliases', {'FID': 'FID', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'FID_School': 'FID_School', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SCHOOL_': 'SCHOOL_', 'SCHOOL_ID': 'SCHOOL_ID', 'SCHDIST04_': 'SCHDIST04_', 'SCHDIST041': 'SCHDIST041', 'SCH_LATEST': 'SCH_LATEST', 'SCH_LATE_1': 'SCH_LATE_1', 'SCHOOLDIST': 'SCHOOLDIST', 'POLYTYPE': 'POLYTYPE', 'PRIMARYPOL': 'PRIMARYPOL', 'USERNAME': 'USERNAME', 'UPDATE_': 'UPDATE_', 'EDITED': 'EDITED', 'RPOLY_': 'RPOLY_', 'LPOLY_': 'LPOLY_', 'EACODE': 'EACODE', 'District2': 'District2', 'Inst_ID': 'Inst_ID', 'SchDist': 'SchDist', 'FID_BOCES_': 'FID_BOCES_', 'SEDdir_BOC': 'SEDdir_BOC', 'SEDdir_B_1': 'SEDdir_B_1', 'Shape_Leng': 'Shape_Leng', 'OID_': 'OID_', 'ID': 'ID', 'INSTITID': 'INSTITID', 'SED_CODE_1': 'SED_CODE_1', 'POPULAR_NA': 'POPULAR_NA', 'INSTPECD': 'INSTPECD', 'INSTSUBYPE': 'INSTSUBYPE', 'INSSUBDE': 'INSSUBDE', 'MUNICODE': 'MUNICODE', 'SDLCODE': 'SDLCODE', 'ORPTSCOD_1': 'ORPTSCOD_1', 'Shape_Le_1': 'Shape_Le_1', 'instidNUM': 'instidNUM', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'field_48': 'field_48', 'Estimated Total Population': 'Estimated Total Population', 'Estimated Population 5-17': 'Estimated Population 5-17', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder', '% 5-17 in poverty': '% 5-17 in poverty', });
lyr_JamestownSchoolDistrict_3.set('fieldAliases', {'FID': 'FID', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'FID_School': 'FID_School', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SCHOOL_': 'SCHOOL_', 'SCHOOL_ID': 'SCHOOL_ID', 'SCHDIST04_': 'SCHDIST04_', 'SCHDIST041': 'SCHDIST041', 'SCH_LATEST': 'SCH_LATEST', 'SCH_LATE_1': 'SCH_LATE_1', 'SCHOOLDIST': 'SCHOOLDIST', 'POLYTYPE': 'POLYTYPE', 'PRIMARYPOL': 'PRIMARYPOL', 'USERNAME': 'USERNAME', 'UPDATE_': 'UPDATE_', 'EDITED': 'EDITED', 'RPOLY_': 'RPOLY_', 'LPOLY_': 'LPOLY_', 'EACODE': 'EACODE', 'District2': 'District2', 'Inst_ID': 'Inst_ID', 'SchDist': 'SchDist', 'FID_BOCES_': 'FID_BOCES_', 'SEDdir_BOC': 'SEDdir_BOC', 'SEDdir_B_1': 'SEDdir_B_1', 'Shape_Leng': 'Shape_Leng', 'OID_': 'OID_', 'ID': 'ID', 'INSTITID': 'INSTITID', 'SED_CODE_1': 'SED_CODE_1', 'POPULAR_NA': 'POPULAR_NA', 'INSTPECD': 'INSTPECD', 'INSTSUBYPE': 'INSTSUBYPE', 'INSSUBDE': 'INSSUBDE', 'MUNICODE': 'MUNICODE', 'SDLCODE': 'SDLCODE', 'ORPTSCOD_1': 'ORPTSCOD_1', 'Shape_Le_1': 'Shape_Le_1', 'instidNUM': 'instidNUM', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'field_48': 'field_48', 'Estimated Total Population': 'Estimated Total Population', 'Estimated Population 5-17': 'Estimated Population 5-17', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder', '% 5-17 in poverty': '% 5-17 in poverty', });
lyr_PanamaSchoolDistrict_4.set('fieldAliases', {'FID': 'FID', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'FID_School': 'FID_School', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SCHOOL_': 'SCHOOL_', 'SCHOOL_ID': 'SCHOOL_ID', 'SCHDIST04_': 'SCHDIST04_', 'SCHDIST041': 'SCHDIST041', 'SCH_LATEST': 'SCH_LATEST', 'SCH_LATE_1': 'SCH_LATE_1', 'SCHOOLDIST': 'SCHOOLDIST', 'POLYTYPE': 'POLYTYPE', 'PRIMARYPOL': 'PRIMARYPOL', 'USERNAME': 'USERNAME', 'UPDATE_': 'UPDATE_', 'EDITED': 'EDITED', 'RPOLY_': 'RPOLY_', 'LPOLY_': 'LPOLY_', 'EACODE': 'EACODE', 'District2': 'District2', 'Inst_ID': 'Inst_ID', 'SchDist': 'SchDist', 'FID_BOCES_': 'FID_BOCES_', 'SEDdir_BOC': 'SEDdir_BOC', 'SEDdir_B_1': 'SEDdir_B_1', 'Shape_Leng': 'Shape_Leng', 'OID_': 'OID_', 'ID': 'ID', 'INSTITID': 'INSTITID', 'SED_CODE_1': 'SED_CODE_1', 'POPULAR_NA': 'POPULAR_NA', 'INSTPECD': 'INSTPECD', 'INSTSUBYPE': 'INSTSUBYPE', 'INSSUBDE': 'INSSUBDE', 'MUNICODE': 'MUNICODE', 'SDLCODE': 'SDLCODE', 'ORPTSCOD_1': 'ORPTSCOD_1', 'Shape_Le_1': 'Shape_Le_1', 'instidNUM': 'instidNUM', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'field_48': 'field_48', 'Estimated Total Population': 'Estimated Total Population', 'Estimated Population 5-17': 'Estimated Population 5-17', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder', '% 5-17 in poverty': '% 5-17 in poverty', });
lyr_BemusPointSchoolDistrict_5.set('fieldAliases', {'FID': 'FID', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'FID_School': 'FID_School', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SCHOOL_': 'SCHOOL_', 'SCHOOL_ID': 'SCHOOL_ID', 'SCHDIST04_': 'SCHDIST04_', 'SCHDIST041': 'SCHDIST041', 'SCH_LATEST': 'SCH_LATEST', 'SCH_LATE_1': 'SCH_LATE_1', 'SCHOOLDIST': 'SCHOOLDIST', 'POLYTYPE': 'POLYTYPE', 'PRIMARYPOL': 'PRIMARYPOL', 'USERNAME': 'USERNAME', 'UPDATE_': 'UPDATE_', 'EDITED': 'EDITED', 'RPOLY_': 'RPOLY_', 'LPOLY_': 'LPOLY_', 'EACODE': 'EACODE', 'District2': 'District2', 'Inst_ID': 'Inst_ID', 'SchDist': 'SchDist', 'FID_BOCES_': 'FID_BOCES_', 'SEDdir_BOC': 'SEDdir_BOC', 'SEDdir_B_1': 'SEDdir_B_1', 'Shape_Leng': 'Shape_Leng', 'OID_': 'OID_', 'ID': 'ID', 'INSTITID': 'INSTITID', 'SED_CODE_1': 'SED_CODE_1', 'POPULAR_NA': 'POPULAR_NA', 'INSTPECD': 'INSTPECD', 'INSTSUBYPE': 'INSTSUBYPE', 'INSSUBDE': 'INSSUBDE', 'MUNICODE': 'MUNICODE', 'SDLCODE': 'SDLCODE', 'ORPTSCOD_1': 'ORPTSCOD_1', 'Shape_Le_1': 'Shape_Le_1', 'instidNUM': 'instidNUM', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'field_48': 'field_48', 'Estimated Total Population': 'Estimated Total Population', 'Estimated Population 5-17': 'Estimated Population 5-17', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder', '% 5-17 in poverty': '% 5-17 in poverty', });
lyr_BroctonSchoolDistrict_6.set('fieldAliases', {'FID': 'FID', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'FID_School': 'FID_School', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SCHOOL_': 'SCHOOL_', 'SCHOOL_ID': 'SCHOOL_ID', 'SCHDIST04_': 'SCHDIST04_', 'SCHDIST041': 'SCHDIST041', 'SCH_LATEST': 'SCH_LATEST', 'SCH_LATE_1': 'SCH_LATE_1', 'SCHOOLDIST': 'SCHOOLDIST', 'POLYTYPE': 'POLYTYPE', 'PRIMARYPOL': 'PRIMARYPOL', 'USERNAME': 'USERNAME', 'UPDATE_': 'UPDATE_', 'EDITED': 'EDITED', 'RPOLY_': 'RPOLY_', 'LPOLY_': 'LPOLY_', 'EACODE': 'EACODE', 'District2': 'District2', 'Inst_ID': 'Inst_ID', 'SchDist': 'SchDist', 'FID_BOCES_': 'FID_BOCES_', 'SEDdir_BOC': 'SEDdir_BOC', 'SEDdir_B_1': 'SEDdir_B_1', 'Shape_Leng': 'Shape_Leng', 'OID_': 'OID_', 'ID': 'ID', 'INSTITID': 'INSTITID', 'SED_CODE_1': 'SED_CODE_1', 'POPULAR_NA': 'POPULAR_NA', 'INSTPECD': 'INSTPECD', 'INSTSUBYPE': 'INSTSUBYPE', 'INSSUBDE': 'INSSUBDE', 'MUNICODE': 'MUNICODE', 'SDLCODE': 'SDLCODE', 'ORPTSCOD_1': 'ORPTSCOD_1', 'Shape_Le_1': 'Shape_Le_1', 'instidNUM': 'instidNUM', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'field_48': 'field_48', 'Estimated Total Population': 'Estimated Total Population', 'Estimated Population 5-17': 'Estimated Population 5-17', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder', '% 5-17 in poverty': '% 5-17 in poverty', });
lyr_CassadagaSchoolDistrict_7.set('fieldAliases', {'FID': 'FID', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'FID_School': 'FID_School', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SCHOOL_': 'SCHOOL_', 'SCHOOL_ID': 'SCHOOL_ID', 'SCHDIST04_': 'SCHDIST04_', 'SCHDIST041': 'SCHDIST041', 'SCH_LATEST': 'SCH_LATEST', 'SCH_LATE_1': 'SCH_LATE_1', 'SCHOOLDIST': 'SCHOOLDIST', 'POLYTYPE': 'POLYTYPE', 'PRIMARYPOL': 'PRIMARYPOL', 'USERNAME': 'USERNAME', 'UPDATE_': 'UPDATE_', 'EDITED': 'EDITED', 'RPOLY_': 'RPOLY_', 'LPOLY_': 'LPOLY_', 'EACODE': 'EACODE', 'District2': 'District2', 'Inst_ID': 'Inst_ID', 'SchDist': 'SchDist', 'FID_BOCES_': 'FID_BOCES_', 'SEDdir_BOC': 'SEDdir_BOC', 'SEDdir_B_1': 'SEDdir_B_1', 'Shape_Leng': 'Shape_Leng', 'OID_': 'OID_', 'ID': 'ID', 'INSTITID': 'INSTITID', 'SED_CODE_1': 'SED_CODE_1', 'POPULAR_NA': 'POPULAR_NA', 'INSTPECD': 'INSTPECD', 'INSTSUBYPE': 'INSTSUBYPE', 'INSSUBDE': 'INSSUBDE', 'MUNICODE': 'MUNICODE', 'SDLCODE': 'SDLCODE', 'ORPTSCOD_1': 'ORPTSCOD_1', 'Shape_Le_1': 'Shape_Le_1', 'instidNUM': 'instidNUM', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'field_48': 'field_48', 'Estimated Total Population': 'Estimated Total Population', 'Estimated Population 5-17': 'Estimated Population 5-17', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder', '% 5-17 in poverty': '% 5-17 in poverty', });
lyr_ClymerSchoolDistrict_8.set('fieldAliases', {'FID': 'FID', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'FID_School': 'FID_School', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SCHOOL_': 'SCHOOL_', 'SCHOOL_ID': 'SCHOOL_ID', 'SCHDIST04_': 'SCHDIST04_', 'SCHDIST041': 'SCHDIST041', 'SCH_LATEST': 'SCH_LATEST', 'SCH_LATE_1': 'SCH_LATE_1', 'SCHOOLDIST': 'SCHOOLDIST', 'POLYTYPE': 'POLYTYPE', 'PRIMARYPOL': 'PRIMARYPOL', 'USERNAME': 'USERNAME', 'UPDATE_': 'UPDATE_', 'EDITED': 'EDITED', 'RPOLY_': 'RPOLY_', 'LPOLY_': 'LPOLY_', 'EACODE': 'EACODE', 'District2': 'District2', 'Inst_ID': 'Inst_ID', 'SchDist': 'SchDist', 'FID_BOCES_': 'FID_BOCES_', 'SEDdir_BOC': 'SEDdir_BOC', 'SEDdir_B_1': 'SEDdir_B_1', 'Shape_Leng': 'Shape_Leng', 'OID_': 'OID_', 'ID': 'ID', 'INSTITID': 'INSTITID', 'SED_CODE_1': 'SED_CODE_1', 'POPULAR_NA': 'POPULAR_NA', 'INSTPECD': 'INSTPECD', 'INSTSUBYPE': 'INSTSUBYPE', 'INSSUBDE': 'INSSUBDE', 'MUNICODE': 'MUNICODE', 'SDLCODE': 'SDLCODE', 'ORPTSCOD_1': 'ORPTSCOD_1', 'Shape_Le_1': 'Shape_Le_1', 'instidNUM': 'instidNUM', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'field_48': 'field_48', 'Estimated Total Population': 'Estimated Total Population', 'Estimated Population 5-17': 'Estimated Population 5-17', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder', '% 5-17 in poverty': '% 5-17 in poverty', });
lyr_DunkirkSchoolDistrict_9.set('fieldAliases', {'FID': 'FID', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'FID_School': 'FID_School', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SCHOOL_': 'SCHOOL_', 'SCHOOL_ID': 'SCHOOL_ID', 'SCHDIST04_': 'SCHDIST04_', 'SCHDIST041': 'SCHDIST041', 'SCH_LATEST': 'SCH_LATEST', 'SCH_LATE_1': 'SCH_LATE_1', 'SCHOOLDIST': 'SCHOOLDIST', 'POLYTYPE': 'POLYTYPE', 'PRIMARYPOL': 'PRIMARYPOL', 'USERNAME': 'USERNAME', 'UPDATE_': 'UPDATE_', 'EDITED': 'EDITED', 'RPOLY_': 'RPOLY_', 'LPOLY_': 'LPOLY_', 'EACODE': 'EACODE', 'District2': 'District2', 'Inst_ID': 'Inst_ID', 'SchDist': 'SchDist', 'FID_BOCES_': 'FID_BOCES_', 'SEDdir_BOC': 'SEDdir_BOC', 'SEDdir_B_1': 'SEDdir_B_1', 'Shape_Leng': 'Shape_Leng', 'OID_': 'OID_', 'ID': 'ID', 'INSTITID': 'INSTITID', 'SED_CODE_1': 'SED_CODE_1', 'POPULAR_NA': 'POPULAR_NA', 'INSTPECD': 'INSTPECD', 'INSTSUBYPE': 'INSTSUBYPE', 'INSSUBDE': 'INSSUBDE', 'MUNICODE': 'MUNICODE', 'SDLCODE': 'SDLCODE', 'ORPTSCOD_1': 'ORPTSCOD_1', 'Shape_Le_1': 'Shape_Le_1', 'instidNUM': 'instidNUM', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'field_48': 'field_48', 'Estimated Total Population': 'Estimated Total Population', 'Estimated Population 5-17': 'Estimated Population 5-17', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder', '% 5-17 in poverty': '% 5-17 in poverty', });
lyr_FalconerSchoolDistrict_10.set('fieldAliases', {'FID': 'FID', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'FID_School': 'FID_School', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SCHOOL_': 'SCHOOL_', 'SCHOOL_ID': 'SCHOOL_ID', 'SCHDIST04_': 'SCHDIST04_', 'SCHDIST041': 'SCHDIST041', 'SCH_LATEST': 'SCH_LATEST', 'SCH_LATE_1': 'SCH_LATE_1', 'SCHOOLDIST': 'SCHOOLDIST', 'POLYTYPE': 'POLYTYPE', 'PRIMARYPOL': 'PRIMARYPOL', 'USERNAME': 'USERNAME', 'UPDATE_': 'UPDATE_', 'EDITED': 'EDITED', 'RPOLY_': 'RPOLY_', 'LPOLY_': 'LPOLY_', 'EACODE': 'EACODE', 'District2': 'District2', 'Inst_ID': 'Inst_ID', 'SchDist': 'SchDist', 'FID_BOCES_': 'FID_BOCES_', 'SEDdir_BOC': 'SEDdir_BOC', 'SEDdir_B_1': 'SEDdir_B_1', 'Shape_Leng': 'Shape_Leng', 'OID_': 'OID_', 'ID': 'ID', 'INSTITID': 'INSTITID', 'SED_CODE_1': 'SED_CODE_1', 'POPULAR_NA': 'POPULAR_NA', 'INSTPECD': 'INSTPECD', 'INSTSUBYPE': 'INSTSUBYPE', 'INSSUBDE': 'INSSUBDE', 'MUNICODE': 'MUNICODE', 'SDLCODE': 'SDLCODE', 'ORPTSCOD_1': 'ORPTSCOD_1', 'Shape_Le_1': 'Shape_Le_1', 'instidNUM': 'instidNUM', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'field_48': 'field_48', 'Estimated Total Population': 'Estimated Total Population', 'Estimated Population 5-17': 'Estimated Population 5-17', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder', '% 5-17 in poverty': '% 5-17 in poverty', });
lyr_ForestvilleSchoolDistrict_11.set('fieldAliases', {'FID': 'FID', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'FID_School': 'FID_School', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SCHOOL_': 'SCHOOL_', 'SCHOOL_ID': 'SCHOOL_ID', 'SCHDIST04_': 'SCHDIST04_', 'SCHDIST041': 'SCHDIST041', 'SCH_LATEST': 'SCH_LATEST', 'SCH_LATE_1': 'SCH_LATE_1', 'SCHOOLDIST': 'SCHOOLDIST', 'POLYTYPE': 'POLYTYPE', 'PRIMARYPOL': 'PRIMARYPOL', 'USERNAME': 'USERNAME', 'UPDATE_': 'UPDATE_', 'EDITED': 'EDITED', 'RPOLY_': 'RPOLY_', 'LPOLY_': 'LPOLY_', 'EACODE': 'EACODE', 'District2': 'District2', 'Inst_ID': 'Inst_ID', 'SchDist': 'SchDist', 'FID_BOCES_': 'FID_BOCES_', 'SEDdir_BOC': 'SEDdir_BOC', 'SEDdir_B_1': 'SEDdir_B_1', 'Shape_Leng': 'Shape_Leng', 'OID_': 'OID_', 'ID': 'ID', 'INSTITID': 'INSTITID', 'SED_CODE_1': 'SED_CODE_1', 'POPULAR_NA': 'POPULAR_NA', 'INSTPECD': 'INSTPECD', 'INSTSUBYPE': 'INSTSUBYPE', 'INSSUBDE': 'INSSUBDE', 'MUNICODE': 'MUNICODE', 'SDLCODE': 'SDLCODE', 'ORPTSCOD_1': 'ORPTSCOD_1', 'Shape_Le_1': 'Shape_Le_1', 'instidNUM': 'instidNUM', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'field_48': 'field_48', 'Estimated Total Population': 'Estimated Total Population', 'Estimated Population 5-17': 'Estimated Population 5-17', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder', '% 5-17 in poverty': '% 5-17 in poverty', });
lyr_FredoniaSchoolDistrict_12.set('fieldAliases', {'FID': 'FID', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'FID_School': 'FID_School', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SCHOOL_': 'SCHOOL_', 'SCHOOL_ID': 'SCHOOL_ID', 'SCHDIST04_': 'SCHDIST04_', 'SCHDIST041': 'SCHDIST041', 'SCH_LATEST': 'SCH_LATEST', 'SCH_LATE_1': 'SCH_LATE_1', 'SCHOOLDIST': 'SCHOOLDIST', 'POLYTYPE': 'POLYTYPE', 'PRIMARYPOL': 'PRIMARYPOL', 'USERNAME': 'USERNAME', 'UPDATE_': 'UPDATE_', 'EDITED': 'EDITED', 'RPOLY_': 'RPOLY_', 'LPOLY_': 'LPOLY_', 'EACODE': 'EACODE', 'District2': 'District2', 'Inst_ID': 'Inst_ID', 'SchDist': 'SchDist', 'FID_BOCES_': 'FID_BOCES_', 'SEDdir_BOC': 'SEDdir_BOC', 'SEDdir_B_1': 'SEDdir_B_1', 'Shape_Leng': 'Shape_Leng', 'OID_': 'OID_', 'ID': 'ID', 'INSTITID': 'INSTITID', 'SED_CODE_1': 'SED_CODE_1', 'POPULAR_NA': 'POPULAR_NA', 'INSTPECD': 'INSTPECD', 'INSTSUBYPE': 'INSTSUBYPE', 'INSSUBDE': 'INSSUBDE', 'MUNICODE': 'MUNICODE', 'SDLCODE': 'SDLCODE', 'ORPTSCOD_1': 'ORPTSCOD_1', 'Shape_Le_1': 'Shape_Le_1', 'instidNUM': 'instidNUM', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'field_48': 'field_48', 'Estimated Total Population': 'Estimated Total Population', 'Estimated Population 5-17': 'Estimated Population 5-17', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder', '% 5-17 in poverty': '% 5-17 in poverty', });
lyr_PineValleySchoolDistrict_13.set('fieldAliases', {'FID': 'FID', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'FID_School': 'FID_School', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SCHOOL_': 'SCHOOL_', 'SCHOOL_ID': 'SCHOOL_ID', 'SCHDIST04_': 'SCHDIST04_', 'SCHDIST041': 'SCHDIST041', 'SCH_LATEST': 'SCH_LATEST', 'SCH_LATE_1': 'SCH_LATE_1', 'SCHOOLDIST': 'SCHOOLDIST', 'POLYTYPE': 'POLYTYPE', 'PRIMARYPOL': 'PRIMARYPOL', 'USERNAME': 'USERNAME', 'UPDATE_': 'UPDATE_', 'EDITED': 'EDITED', 'RPOLY_': 'RPOLY_', 'LPOLY_': 'LPOLY_', 'EACODE': 'EACODE', 'District2': 'District2', 'Inst_ID': 'Inst_ID', 'SchDist': 'SchDist', 'FID_BOCES_': 'FID_BOCES_', 'SEDdir_BOC': 'SEDdir_BOC', 'SEDdir_B_1': 'SEDdir_B_1', 'Shape_Leng': 'Shape_Leng', 'OID_': 'OID_', 'ID': 'ID', 'INSTITID': 'INSTITID', 'SED_CODE_1': 'SED_CODE_1', 'POPULAR_NA': 'POPULAR_NA', 'INSTPECD': 'INSTPECD', 'INSTSUBYPE': 'INSTSUBYPE', 'INSSUBDE': 'INSSUBDE', 'MUNICODE': 'MUNICODE', 'SDLCODE': 'SDLCODE', 'ORPTSCOD_1': 'ORPTSCOD_1', 'Shape_Le_1': 'Shape_Le_1', 'instidNUM': 'instidNUM', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'field_48': 'field_48', 'Estimated Total Population': 'Estimated Total Population', 'Estimated Population 5-17': 'Estimated Population 5-17', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder', '% 5-17 in poverty': '% 5-17 in poverty', });
lyr_RipleySchoolDistrict_14.set('fieldAliases', {'FID': 'FID', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'FID_School': 'FID_School', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SCHOOL_': 'SCHOOL_', 'SCHOOL_ID': 'SCHOOL_ID', 'SCHDIST04_': 'SCHDIST04_', 'SCHDIST041': 'SCHDIST041', 'SCH_LATEST': 'SCH_LATEST', 'SCH_LATE_1': 'SCH_LATE_1', 'SCHOOLDIST': 'SCHOOLDIST', 'POLYTYPE': 'POLYTYPE', 'PRIMARYPOL': 'PRIMARYPOL', 'USERNAME': 'USERNAME', 'UPDATE_': 'UPDATE_', 'EDITED': 'EDITED', 'RPOLY_': 'RPOLY_', 'LPOLY_': 'LPOLY_', 'EACODE': 'EACODE', 'District2': 'District2', 'Inst_ID': 'Inst_ID', 'SchDist': 'SchDist', 'FID_BOCES_': 'FID_BOCES_', 'SEDdir_BOC': 'SEDdir_BOC', 'SEDdir_B_1': 'SEDdir_B_1', 'Shape_Leng': 'Shape_Leng', 'OID_': 'OID_', 'ID': 'ID', 'INSTITID': 'INSTITID', 'SED_CODE_1': 'SED_CODE_1', 'POPULAR_NA': 'POPULAR_NA', 'INSTPECD': 'INSTPECD', 'INSTSUBYPE': 'INSTSUBYPE', 'INSSUBDE': 'INSSUBDE', 'MUNICODE': 'MUNICODE', 'SDLCODE': 'SDLCODE', 'ORPTSCOD_1': 'ORPTSCOD_1', 'Shape_Le_1': 'Shape_Le_1', 'instidNUM': 'instidNUM', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'field_48': 'field_48', 'Estimated Total Population': 'Estimated Total Population', 'Estimated Population 5-17': 'Estimated Population 5-17', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder', '% 5-17 in poverty': '% 5-17 in poverty', });
lyr_ShermanSchoolDistrict_15.set('fieldAliases', {'FID': 'FID', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'FID_School': 'FID_School', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SCHOOL_': 'SCHOOL_', 'SCHOOL_ID': 'SCHOOL_ID', 'SCHDIST04_': 'SCHDIST04_', 'SCHDIST041': 'SCHDIST041', 'SCH_LATEST': 'SCH_LATEST', 'SCH_LATE_1': 'SCH_LATE_1', 'SCHOOLDIST': 'SCHOOLDIST', 'POLYTYPE': 'POLYTYPE', 'PRIMARYPOL': 'PRIMARYPOL', 'USERNAME': 'USERNAME', 'UPDATE_': 'UPDATE_', 'EDITED': 'EDITED', 'RPOLY_': 'RPOLY_', 'LPOLY_': 'LPOLY_', 'EACODE': 'EACODE', 'District2': 'District2', 'Inst_ID': 'Inst_ID', 'SchDist': 'SchDist', 'FID_BOCES_': 'FID_BOCES_', 'SEDdir_BOC': 'SEDdir_BOC', 'SEDdir_B_1': 'SEDdir_B_1', 'Shape_Leng': 'Shape_Leng', 'OID_': 'OID_', 'ID': 'ID', 'INSTITID': 'INSTITID', 'SED_CODE_1': 'SED_CODE_1', 'POPULAR_NA': 'POPULAR_NA', 'INSTPECD': 'INSTPECD', 'INSTSUBYPE': 'INSTSUBYPE', 'INSSUBDE': 'INSSUBDE', 'MUNICODE': 'MUNICODE', 'SDLCODE': 'SDLCODE', 'ORPTSCOD_1': 'ORPTSCOD_1', 'Shape_Le_1': 'Shape_Le_1', 'instidNUM': 'instidNUM', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'field_48': 'field_48', 'Estimated Total Population': 'Estimated Total Population', 'Estimated Population 5-17': 'Estimated Population 5-17', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder', '% 5-17 in poverty': '% 5-17 in poverty', });
lyr_SilverCreekSchoolDistrict_16.set('fieldAliases', {'FID': 'FID', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'FID_School': 'FID_School', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SCHOOL_': 'SCHOOL_', 'SCHOOL_ID': 'SCHOOL_ID', 'SCHDIST04_': 'SCHDIST04_', 'SCHDIST041': 'SCHDIST041', 'SCH_LATEST': 'SCH_LATEST', 'SCH_LATE_1': 'SCH_LATE_1', 'SCHOOLDIST': 'SCHOOLDIST', 'POLYTYPE': 'POLYTYPE', 'PRIMARYPOL': 'PRIMARYPOL', 'USERNAME': 'USERNAME', 'UPDATE_': 'UPDATE_', 'EDITED': 'EDITED', 'RPOLY_': 'RPOLY_', 'LPOLY_': 'LPOLY_', 'EACODE': 'EACODE', 'District2': 'District2', 'Inst_ID': 'Inst_ID', 'SchDist': 'SchDist', 'FID_BOCES_': 'FID_BOCES_', 'SEDdir_BOC': 'SEDdir_BOC', 'SEDdir_B_1': 'SEDdir_B_1', 'Shape_Leng': 'Shape_Leng', 'OID_': 'OID_', 'ID': 'ID', 'INSTITID': 'INSTITID', 'SED_CODE_1': 'SED_CODE_1', 'POPULAR_NA': 'POPULAR_NA', 'INSTPECD': 'INSTPECD', 'INSTSUBYPE': 'INSTSUBYPE', 'INSSUBDE': 'INSSUBDE', 'MUNICODE': 'MUNICODE', 'SDLCODE': 'SDLCODE', 'ORPTSCOD_1': 'ORPTSCOD_1', 'Shape_Le_1': 'Shape_Le_1', 'instidNUM': 'instidNUM', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'field_48': 'field_48', 'Estimated Total Population': 'Estimated Total Population', 'Estimated Population 5-17': 'Estimated Population 5-17', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder', '% 5-17 in poverty': '% 5-17 in poverty', });
lyr_SouthwesternSchoolDistrict_17.set('fieldAliases', {'FID': 'FID', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'FID_School': 'FID_School', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SCHOOL_': 'SCHOOL_', 'SCHOOL_ID': 'SCHOOL_ID', 'SCHDIST04_': 'SCHDIST04_', 'SCHDIST041': 'SCHDIST041', 'SCH_LATEST': 'SCH_LATEST', 'SCH_LATE_1': 'SCH_LATE_1', 'SCHOOLDIST': 'SCHOOLDIST', 'POLYTYPE': 'POLYTYPE', 'PRIMARYPOL': 'PRIMARYPOL', 'USERNAME': 'USERNAME', 'UPDATE_': 'UPDATE_', 'EDITED': 'EDITED', 'RPOLY_': 'RPOLY_', 'LPOLY_': 'LPOLY_', 'EACODE': 'EACODE', 'District2': 'District2', 'Inst_ID': 'Inst_ID', 'SchDist': 'SchDist', 'FID_BOCES_': 'FID_BOCES_', 'SEDdir_BOC': 'SEDdir_BOC', 'SEDdir_B_1': 'SEDdir_B_1', 'Shape_Leng': 'Shape_Leng', 'OID_': 'OID_', 'ID': 'ID', 'INSTITID': 'INSTITID', 'SED_CODE_1': 'SED_CODE_1', 'POPULAR_NA': 'POPULAR_NA', 'INSTPECD': 'INSTPECD', 'INSTSUBYPE': 'INSTSUBYPE', 'INSSUBDE': 'INSSUBDE', 'MUNICODE': 'MUNICODE', 'SDLCODE': 'SDLCODE', 'ORPTSCOD_1': 'ORPTSCOD_1', 'Shape_Le_1': 'Shape_Le_1', 'instidNUM': 'instidNUM', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'field_48': 'field_48', 'Estimated Total Population': 'Estimated Total Population', 'Estimated Population 5-17': 'Estimated Population 5-17', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder', '% 5-17 in poverty': '% 5-17 in poverty', });
lyr_WestfieldSchoolDistrict_18.set('fieldAliases', {'FID': 'FID', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'FID_School': 'FID_School', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SCHOOL_': 'SCHOOL_', 'SCHOOL_ID': 'SCHOOL_ID', 'SCHDIST04_': 'SCHDIST04_', 'SCHDIST041': 'SCHDIST041', 'SCH_LATEST': 'SCH_LATEST', 'SCH_LATE_1': 'SCH_LATE_1', 'SCHOOLDIST': 'SCHOOLDIST', 'POLYTYPE': 'POLYTYPE', 'PRIMARYPOL': 'PRIMARYPOL', 'USERNAME': 'USERNAME', 'UPDATE_': 'UPDATE_', 'EDITED': 'EDITED', 'RPOLY_': 'RPOLY_', 'LPOLY_': 'LPOLY_', 'EACODE': 'EACODE', 'District2': 'District2', 'Inst_ID': 'Inst_ID', 'SchDist': 'SchDist', 'FID_BOCES_': 'FID_BOCES_', 'SEDdir_BOC': 'SEDdir_BOC', 'SEDdir_B_1': 'SEDdir_B_1', 'Shape_Leng': 'Shape_Leng', 'OID_': 'OID_', 'ID': 'ID', 'INSTITID': 'INSTITID', 'SED_CODE_1': 'SED_CODE_1', 'POPULAR_NA': 'POPULAR_NA', 'INSTPECD': 'INSTPECD', 'INSTSUBYPE': 'INSTSUBYPE', 'INSSUBDE': 'INSSUBDE', 'MUNICODE': 'MUNICODE', 'SDLCODE': 'SDLCODE', 'ORPTSCOD_1': 'ORPTSCOD_1', 'Shape_Le_1': 'Shape_Le_1', 'instidNUM': 'instidNUM', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_ChautauquaLakeSchoolDistrict_19.set('fieldAliases', {'FID': 'FID', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'FID_School': 'FID_School', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SCHOOL_': 'SCHOOL_', 'SCHOOL_ID': 'SCHOOL_ID', 'SCHDIST04_': 'SCHDIST04_', 'SCHDIST041': 'SCHDIST041', 'SCH_LATEST': 'SCH_LATEST', 'SCH_LATE_1': 'SCH_LATE_1', 'SCHOOLDIST': 'SCHOOLDIST', 'POLYTYPE': 'POLYTYPE', 'PRIMARYPOL': 'PRIMARYPOL', 'USERNAME': 'USERNAME', 'UPDATE_': 'UPDATE_', 'EDITED': 'EDITED', 'RPOLY_': 'RPOLY_', 'LPOLY_': 'LPOLY_', 'EACODE': 'EACODE', 'District2': 'District2', 'Inst_ID': 'Inst_ID', 'SchDist': 'SchDist', 'FID_BOCES_': 'FID_BOCES_', 'SEDdir_BOC': 'SEDdir_BOC', 'SEDdir_B_1': 'SEDdir_B_1', 'Shape_Leng': 'Shape_Leng', 'OID_': 'OID_', 'ID': 'ID', 'INSTITID': 'INSTITID', 'SED_CODE_1': 'SED_CODE_1', 'POPULAR_NA': 'POPULAR_NA', 'INSTPECD': 'INSTPECD', 'INSTSUBYPE': 'INSTSUBYPE', 'INSSUBDE': 'INSSUBDE', 'MUNICODE': 'MUNICODE', 'SDLCODE': 'SDLCODE', 'ORPTSCOD_1': 'ORPTSCOD_1', 'Shape_Le_1': 'Shape_Le_1', 'instidNUM': 'instidNUM', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_ChautauquaCounty_Public_School_District_Boundaries_20.set('fieldAliases', {'FID': 'FID', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'FID_School': 'FID_School', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SCHOOL_': 'SCHOOL_', 'SCHOOL_ID': 'SCHOOL_ID', 'SCHDIST04_': 'SCHDIST04_', 'SCHDIST041': 'SCHDIST041', 'SCH_LATEST': 'SCH_LATEST', 'SCH_LATE_1': 'SCH_LATE_1', 'SCHOOLDIST': 'SCHOOLDIST', 'POLYTYPE': 'POLYTYPE', 'PRIMARYPOL': 'PRIMARYPOL', 'USERNAME': 'USERNAME', 'UPDATE_': 'UPDATE_', 'EDITED': 'EDITED', 'RPOLY_': 'RPOLY_', 'LPOLY_': 'LPOLY_', 'EACODE': 'EACODE', 'District2': 'District2', 'Inst_ID': 'Inst_ID', 'SchDist': 'SchDist', 'FID_BOCES_': 'FID_BOCES_', 'SEDdir_BOC': 'SEDdir_BOC', 'SEDdir_B_1': 'SEDdir_B_1', 'Shape_Leng': 'Shape_Leng', 'OID_': 'OID_', 'ID': 'ID', 'INSTITID': 'INSTITID', 'SED_CODE_1': 'SED_CODE_1', 'POPULAR_NA': 'POPULAR_NA', 'INSTPECD': 'INSTPECD', 'INSTSUBYPE': 'INSTSUBYPE', 'INSSUBDE': 'INSSUBDE', 'MUNICODE': 'MUNICODE', 'SDLCODE': 'SDLCODE', 'ORPTSCOD_1': 'ORPTSCOD_1', 'Shape_Le_1': 'Shape_Le_1', 'instidNUM': 'instidNUM', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_Census3085_21.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3084_22.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3083_23.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3082_24.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3081_25.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3075_26.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3074_27.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3073_28.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3072_29.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3071_30.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3064_31.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3063_32.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3062_33.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3061_34.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3055_35.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3054_36.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3053_37.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3052_38.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3051_39.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3044_40.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3043_41.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3042_42.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3041_43.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3032_44.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3031_45.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3025_46.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3024_47.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3023_48.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3022_49.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3021_50.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3011_51.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'BlkGp Name': 'BlkGp Name', });
lyr_Census3012_52.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3013_53.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3014_54.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_LoveSchoolneighborhoods_55.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Counties_Shoreline_56.set('fieldAliases', {'NAME': 'NAME', 'ABBREV': 'ABBREV', 'GNIS_ID': 'GNIS_ID', 'FIPS_CODE': 'FIPS_CODE', 'SWIS': 'SWIS', 'NYSP_ZONE': 'NYSP_ZONE', 'POP1990': 'POP1990', 'POP2000': 'POP2000', 'POP2010': 'POP2010', 'POP2020': 'POP2020', 'DOS_LL': 'DOS_LL', 'DOSLL_DATE': 'DOSLL_DATE', 'NYC': 'NYC', 'CALC_SQ_MI': 'CALC_SQ_MI', 'DATEMOD': 'DATEMOD', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ChautauquaCountySchools_57.set('fieldAliases', {'School Name': 'School Name', 'LAT': 'LAT', 'LON': 'LON', 'YEAR': 'YEAR', 'Contact Name': 'Contact Name', 'Title': 'Title', 'Title 1 Eligible': 'Title 1 Eligible', 'K12 total enrollment': 'K12 total enrollment', '% Black': '% Black', '% Hispanic': '% Hispanic', '% White': '% White', '% Multiracial': '% Multiracial', '% with disabilities': '% with disabilities', '% econ disadvantaged': '% econ disadvantaged', '% homeless': '% homeless', '% in foster care': '% in foster care', 'field_17': 'field_17', 'School neighborhood income-to-poverty ratio': 'School neighborhood income-to-poverty ratio', });
lyr_SELschools2024TGFDonly_58.set('fieldAliases', {'School Name': 'School Name', 'LAT': 'LAT', 'LON': 'LON', 'field_4': 'field_4', 'TGFD': 'TGFD', 'TGFD grades': 'TGFD grades', });
lyr_SELschools2024PAXonly_59.set('fieldAliases', {'School Name': 'School Name', 'LAT': 'LAT', 'LON': 'LON', 'PAX': 'PAX', 'PAX grades': 'PAX grades', });
lyr_SELschools2024SOSonly_60.set('fieldAliases', {'School Name': 'School Name', 'LAT': 'LAT', 'LON': 'LON', 'SOS': 'SOS', });
lyr_FrewsburgSchoolDistrict_2.set('fieldImages', {'FID': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'FID_School': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SCHOOL_': 'Range', 'SCHOOL_ID': 'Range', 'SCHDIST04_': 'TextEdit', 'SCHDIST041': 'TextEdit', 'SCH_LATEST': 'Range', 'SCH_LATE_1': 'Range', 'SCHOOLDIST': 'TextEdit', 'POLYTYPE': 'TextEdit', 'PRIMARYPOL': 'TextEdit', 'USERNAME': 'TextEdit', 'UPDATE_': 'TextEdit', 'EDITED': 'TextEdit', 'RPOLY_': 'Range', 'LPOLY_': 'Range', 'EACODE': 'Range', 'District2': 'TextEdit', 'Inst_ID': 'TextEdit', 'SchDist': 'TextEdit', 'FID_BOCES_': 'Range', 'SEDdir_BOC': 'Range', 'SEDdir_B_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OID_': 'Range', 'ID': 'Range', 'INSTITID': 'TextEdit', 'SED_CODE_1': 'TextEdit', 'POPULAR_NA': 'TextEdit', 'INSTPECD': 'Range', 'INSTSUBYPE': 'Range', 'INSSUBDE': 'TextEdit', 'MUNICODE': 'TextEdit', 'SDLCODE': 'Range', 'ORPTSCOD_1': 'Range', 'Shape_Le_1': 'TextEdit', 'instidNUM': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'field_48': 'TextEdit', 'Estimated Total Population': 'TextEdit', 'Estimated Population 5-17': 'TextEdit', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Range', '% 5-17 in poverty': 'TextEdit', });
lyr_JamestownSchoolDistrict_3.set('fieldImages', {'FID': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'FID_School': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SCHOOL_': 'Range', 'SCHOOL_ID': 'Range', 'SCHDIST04_': 'TextEdit', 'SCHDIST041': 'TextEdit', 'SCH_LATEST': 'Range', 'SCH_LATE_1': 'Range', 'SCHOOLDIST': 'TextEdit', 'POLYTYPE': 'TextEdit', 'PRIMARYPOL': 'TextEdit', 'USERNAME': 'TextEdit', 'UPDATE_': 'TextEdit', 'EDITED': 'TextEdit', 'RPOLY_': 'Range', 'LPOLY_': 'Range', 'EACODE': 'Range', 'District2': 'TextEdit', 'Inst_ID': 'TextEdit', 'SchDist': 'TextEdit', 'FID_BOCES_': 'Range', 'SEDdir_BOC': 'Range', 'SEDdir_B_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OID_': 'Range', 'ID': 'Range', 'INSTITID': 'TextEdit', 'SED_CODE_1': 'TextEdit', 'POPULAR_NA': 'TextEdit', 'INSTPECD': 'Range', 'INSTSUBYPE': 'Range', 'INSSUBDE': 'TextEdit', 'MUNICODE': 'TextEdit', 'SDLCODE': 'Range', 'ORPTSCOD_1': 'Range', 'Shape_Le_1': 'TextEdit', 'instidNUM': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'field_48': 'TextEdit', 'Estimated Total Population': 'TextEdit', 'Estimated Population 5-17': 'TextEdit', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Range', '% 5-17 in poverty': 'TextEdit', });
lyr_PanamaSchoolDistrict_4.set('fieldImages', {'FID': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'FID_School': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SCHOOL_': 'Range', 'SCHOOL_ID': 'Range', 'SCHDIST04_': 'TextEdit', 'SCHDIST041': 'TextEdit', 'SCH_LATEST': 'Range', 'SCH_LATE_1': 'Range', 'SCHOOLDIST': 'TextEdit', 'POLYTYPE': 'TextEdit', 'PRIMARYPOL': 'TextEdit', 'USERNAME': 'TextEdit', 'UPDATE_': 'TextEdit', 'EDITED': 'TextEdit', 'RPOLY_': 'Range', 'LPOLY_': 'Range', 'EACODE': 'Range', 'District2': 'TextEdit', 'Inst_ID': 'TextEdit', 'SchDist': 'TextEdit', 'FID_BOCES_': 'Range', 'SEDdir_BOC': 'Range', 'SEDdir_B_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OID_': 'Range', 'ID': 'Range', 'INSTITID': 'TextEdit', 'SED_CODE_1': 'TextEdit', 'POPULAR_NA': 'TextEdit', 'INSTPECD': 'Range', 'INSTSUBYPE': 'Range', 'INSSUBDE': 'TextEdit', 'MUNICODE': 'TextEdit', 'SDLCODE': 'Range', 'ORPTSCOD_1': 'Range', 'Shape_Le_1': 'TextEdit', 'instidNUM': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'field_48': 'TextEdit', 'Estimated Total Population': 'TextEdit', 'Estimated Population 5-17': 'TextEdit', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Range', '% 5-17 in poverty': 'TextEdit', });
lyr_BemusPointSchoolDistrict_5.set('fieldImages', {'FID': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'FID_School': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SCHOOL_': 'Range', 'SCHOOL_ID': 'Range', 'SCHDIST04_': 'TextEdit', 'SCHDIST041': 'TextEdit', 'SCH_LATEST': 'Range', 'SCH_LATE_1': 'Range', 'SCHOOLDIST': 'TextEdit', 'POLYTYPE': 'TextEdit', 'PRIMARYPOL': 'TextEdit', 'USERNAME': 'TextEdit', 'UPDATE_': 'TextEdit', 'EDITED': 'TextEdit', 'RPOLY_': 'Range', 'LPOLY_': 'Range', 'EACODE': 'Range', 'District2': 'TextEdit', 'Inst_ID': 'TextEdit', 'SchDist': 'TextEdit', 'FID_BOCES_': 'Range', 'SEDdir_BOC': 'Range', 'SEDdir_B_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OID_': 'Range', 'ID': 'Range', 'INSTITID': 'TextEdit', 'SED_CODE_1': 'TextEdit', 'POPULAR_NA': 'TextEdit', 'INSTPECD': 'Range', 'INSTSUBYPE': 'Range', 'INSSUBDE': 'TextEdit', 'MUNICODE': 'TextEdit', 'SDLCODE': 'Range', 'ORPTSCOD_1': 'Range', 'Shape_Le_1': 'TextEdit', 'instidNUM': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'field_48': 'TextEdit', 'Estimated Total Population': 'TextEdit', 'Estimated Population 5-17': 'TextEdit', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Range', '% 5-17 in poverty': 'TextEdit', });
lyr_BroctonSchoolDistrict_6.set('fieldImages', {'FID': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'FID_School': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SCHOOL_': 'Range', 'SCHOOL_ID': 'Range', 'SCHDIST04_': 'TextEdit', 'SCHDIST041': 'TextEdit', 'SCH_LATEST': 'Range', 'SCH_LATE_1': 'Range', 'SCHOOLDIST': 'TextEdit', 'POLYTYPE': 'TextEdit', 'PRIMARYPOL': 'TextEdit', 'USERNAME': 'TextEdit', 'UPDATE_': 'TextEdit', 'EDITED': 'TextEdit', 'RPOLY_': 'Range', 'LPOLY_': 'Range', 'EACODE': 'Range', 'District2': 'TextEdit', 'Inst_ID': 'TextEdit', 'SchDist': 'TextEdit', 'FID_BOCES_': 'Range', 'SEDdir_BOC': 'Range', 'SEDdir_B_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OID_': 'Range', 'ID': 'Range', 'INSTITID': 'TextEdit', 'SED_CODE_1': 'TextEdit', 'POPULAR_NA': 'TextEdit', 'INSTPECD': 'Range', 'INSTSUBYPE': 'Range', 'INSSUBDE': 'TextEdit', 'MUNICODE': 'TextEdit', 'SDLCODE': 'Range', 'ORPTSCOD_1': 'Range', 'Shape_Le_1': 'TextEdit', 'instidNUM': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'field_48': 'TextEdit', 'Estimated Total Population': 'TextEdit', 'Estimated Population 5-17': 'TextEdit', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Range', '% 5-17 in poverty': 'TextEdit', });
lyr_CassadagaSchoolDistrict_7.set('fieldImages', {'FID': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'FID_School': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SCHOOL_': 'Range', 'SCHOOL_ID': 'Range', 'SCHDIST04_': 'TextEdit', 'SCHDIST041': 'TextEdit', 'SCH_LATEST': 'Range', 'SCH_LATE_1': 'Range', 'SCHOOLDIST': 'TextEdit', 'POLYTYPE': 'TextEdit', 'PRIMARYPOL': 'TextEdit', 'USERNAME': 'TextEdit', 'UPDATE_': 'TextEdit', 'EDITED': 'TextEdit', 'RPOLY_': 'Range', 'LPOLY_': 'Range', 'EACODE': 'Range', 'District2': 'TextEdit', 'Inst_ID': 'TextEdit', 'SchDist': 'TextEdit', 'FID_BOCES_': 'Range', 'SEDdir_BOC': 'Range', 'SEDdir_B_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OID_': 'Range', 'ID': 'Range', 'INSTITID': 'TextEdit', 'SED_CODE_1': 'TextEdit', 'POPULAR_NA': 'TextEdit', 'INSTPECD': 'Range', 'INSTSUBYPE': 'Range', 'INSSUBDE': 'TextEdit', 'MUNICODE': 'TextEdit', 'SDLCODE': 'Range', 'ORPTSCOD_1': 'Range', 'Shape_Le_1': 'TextEdit', 'instidNUM': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'field_48': 'TextEdit', 'Estimated Total Population': 'TextEdit', 'Estimated Population 5-17': 'TextEdit', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Range', '% 5-17 in poverty': 'TextEdit', });
lyr_ClymerSchoolDistrict_8.set('fieldImages', {'FID': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'FID_School': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SCHOOL_': 'Range', 'SCHOOL_ID': 'Range', 'SCHDIST04_': 'TextEdit', 'SCHDIST041': 'TextEdit', 'SCH_LATEST': 'Range', 'SCH_LATE_1': 'Range', 'SCHOOLDIST': 'TextEdit', 'POLYTYPE': 'TextEdit', 'PRIMARYPOL': 'TextEdit', 'USERNAME': 'TextEdit', 'UPDATE_': 'TextEdit', 'EDITED': 'TextEdit', 'RPOLY_': 'Range', 'LPOLY_': 'Range', 'EACODE': 'Range', 'District2': 'TextEdit', 'Inst_ID': 'TextEdit', 'SchDist': 'TextEdit', 'FID_BOCES_': 'Range', 'SEDdir_BOC': 'Range', 'SEDdir_B_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OID_': 'Range', 'ID': 'Range', 'INSTITID': 'TextEdit', 'SED_CODE_1': 'TextEdit', 'POPULAR_NA': 'TextEdit', 'INSTPECD': 'Range', 'INSTSUBYPE': 'Range', 'INSSUBDE': 'TextEdit', 'MUNICODE': 'TextEdit', 'SDLCODE': 'Range', 'ORPTSCOD_1': 'Range', 'Shape_Le_1': 'TextEdit', 'instidNUM': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'field_48': 'TextEdit', 'Estimated Total Population': 'TextEdit', 'Estimated Population 5-17': 'TextEdit', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Range', '% 5-17 in poverty': 'TextEdit', });
lyr_DunkirkSchoolDistrict_9.set('fieldImages', {'FID': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'FID_School': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SCHOOL_': 'Range', 'SCHOOL_ID': 'Range', 'SCHDIST04_': 'TextEdit', 'SCHDIST041': 'TextEdit', 'SCH_LATEST': 'Range', 'SCH_LATE_1': 'Range', 'SCHOOLDIST': 'TextEdit', 'POLYTYPE': 'TextEdit', 'PRIMARYPOL': 'TextEdit', 'USERNAME': 'TextEdit', 'UPDATE_': 'TextEdit', 'EDITED': 'TextEdit', 'RPOLY_': 'Range', 'LPOLY_': 'Range', 'EACODE': 'Range', 'District2': 'TextEdit', 'Inst_ID': 'TextEdit', 'SchDist': 'TextEdit', 'FID_BOCES_': 'Range', 'SEDdir_BOC': 'Range', 'SEDdir_B_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OID_': 'Range', 'ID': 'Range', 'INSTITID': 'TextEdit', 'SED_CODE_1': 'TextEdit', 'POPULAR_NA': 'TextEdit', 'INSTPECD': 'Range', 'INSTSUBYPE': 'Range', 'INSSUBDE': 'TextEdit', 'MUNICODE': 'TextEdit', 'SDLCODE': 'Range', 'ORPTSCOD_1': 'Range', 'Shape_Le_1': 'TextEdit', 'instidNUM': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'field_48': 'TextEdit', 'Estimated Total Population': 'TextEdit', 'Estimated Population 5-17': 'TextEdit', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Range', '% 5-17 in poverty': 'TextEdit', });
lyr_FalconerSchoolDistrict_10.set('fieldImages', {'FID': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'FID_School': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SCHOOL_': 'Range', 'SCHOOL_ID': 'Range', 'SCHDIST04_': 'TextEdit', 'SCHDIST041': 'TextEdit', 'SCH_LATEST': 'Range', 'SCH_LATE_1': 'Range', 'SCHOOLDIST': 'TextEdit', 'POLYTYPE': 'TextEdit', 'PRIMARYPOL': 'TextEdit', 'USERNAME': 'TextEdit', 'UPDATE_': 'TextEdit', 'EDITED': 'TextEdit', 'RPOLY_': 'Range', 'LPOLY_': 'Range', 'EACODE': 'Range', 'District2': 'TextEdit', 'Inst_ID': 'TextEdit', 'SchDist': 'TextEdit', 'FID_BOCES_': 'Range', 'SEDdir_BOC': 'Range', 'SEDdir_B_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OID_': 'Range', 'ID': 'Range', 'INSTITID': 'TextEdit', 'SED_CODE_1': 'TextEdit', 'POPULAR_NA': 'TextEdit', 'INSTPECD': 'Range', 'INSTSUBYPE': 'Range', 'INSSUBDE': 'TextEdit', 'MUNICODE': 'TextEdit', 'SDLCODE': 'Range', 'ORPTSCOD_1': 'Range', 'Shape_Le_1': 'TextEdit', 'instidNUM': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'field_48': 'TextEdit', 'Estimated Total Population': 'TextEdit', 'Estimated Population 5-17': 'TextEdit', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Range', '% 5-17 in poverty': 'TextEdit', });
lyr_ForestvilleSchoolDistrict_11.set('fieldImages', {'FID': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'FID_School': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SCHOOL_': 'Range', 'SCHOOL_ID': 'Range', 'SCHDIST04_': 'TextEdit', 'SCHDIST041': 'TextEdit', 'SCH_LATEST': 'Range', 'SCH_LATE_1': 'Range', 'SCHOOLDIST': 'TextEdit', 'POLYTYPE': 'TextEdit', 'PRIMARYPOL': 'TextEdit', 'USERNAME': 'TextEdit', 'UPDATE_': 'TextEdit', 'EDITED': 'TextEdit', 'RPOLY_': 'Range', 'LPOLY_': 'Range', 'EACODE': 'Range', 'District2': 'TextEdit', 'Inst_ID': 'TextEdit', 'SchDist': 'TextEdit', 'FID_BOCES_': 'Range', 'SEDdir_BOC': 'Range', 'SEDdir_B_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OID_': 'Range', 'ID': 'Range', 'INSTITID': 'TextEdit', 'SED_CODE_1': 'TextEdit', 'POPULAR_NA': 'TextEdit', 'INSTPECD': 'Range', 'INSTSUBYPE': 'Range', 'INSSUBDE': 'TextEdit', 'MUNICODE': 'TextEdit', 'SDLCODE': 'Range', 'ORPTSCOD_1': 'Range', 'Shape_Le_1': 'TextEdit', 'instidNUM': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'field_48': 'TextEdit', 'Estimated Total Population': 'TextEdit', 'Estimated Population 5-17': 'TextEdit', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Range', '% 5-17 in poverty': 'TextEdit', });
lyr_FredoniaSchoolDistrict_12.set('fieldImages', {'FID': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'FID_School': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SCHOOL_': 'Range', 'SCHOOL_ID': 'Range', 'SCHDIST04_': 'TextEdit', 'SCHDIST041': 'TextEdit', 'SCH_LATEST': 'Range', 'SCH_LATE_1': 'Range', 'SCHOOLDIST': 'TextEdit', 'POLYTYPE': 'TextEdit', 'PRIMARYPOL': 'TextEdit', 'USERNAME': 'TextEdit', 'UPDATE_': 'TextEdit', 'EDITED': 'TextEdit', 'RPOLY_': 'Range', 'LPOLY_': 'Range', 'EACODE': 'Range', 'District2': 'TextEdit', 'Inst_ID': 'TextEdit', 'SchDist': 'TextEdit', 'FID_BOCES_': 'Range', 'SEDdir_BOC': 'Range', 'SEDdir_B_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OID_': 'Range', 'ID': 'Range', 'INSTITID': 'TextEdit', 'SED_CODE_1': 'TextEdit', 'POPULAR_NA': 'TextEdit', 'INSTPECD': 'Range', 'INSTSUBYPE': 'Range', 'INSSUBDE': 'TextEdit', 'MUNICODE': 'TextEdit', 'SDLCODE': 'Range', 'ORPTSCOD_1': 'Range', 'Shape_Le_1': 'TextEdit', 'instidNUM': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'field_48': 'TextEdit', 'Estimated Total Population': 'TextEdit', 'Estimated Population 5-17': 'TextEdit', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Range', '% 5-17 in poverty': 'TextEdit', });
lyr_PineValleySchoolDistrict_13.set('fieldImages', {'FID': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'FID_School': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SCHOOL_': 'Range', 'SCHOOL_ID': 'Range', 'SCHDIST04_': 'TextEdit', 'SCHDIST041': 'TextEdit', 'SCH_LATEST': 'Range', 'SCH_LATE_1': 'Range', 'SCHOOLDIST': 'TextEdit', 'POLYTYPE': 'TextEdit', 'PRIMARYPOL': 'TextEdit', 'USERNAME': 'TextEdit', 'UPDATE_': 'TextEdit', 'EDITED': 'TextEdit', 'RPOLY_': 'Range', 'LPOLY_': 'Range', 'EACODE': 'Range', 'District2': 'TextEdit', 'Inst_ID': 'TextEdit', 'SchDist': 'TextEdit', 'FID_BOCES_': 'Range', 'SEDdir_BOC': 'Range', 'SEDdir_B_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OID_': 'Range', 'ID': 'Range', 'INSTITID': 'TextEdit', 'SED_CODE_1': 'TextEdit', 'POPULAR_NA': 'TextEdit', 'INSTPECD': 'Range', 'INSTSUBYPE': 'Range', 'INSSUBDE': 'TextEdit', 'MUNICODE': 'TextEdit', 'SDLCODE': 'Range', 'ORPTSCOD_1': 'Range', 'Shape_Le_1': 'TextEdit', 'instidNUM': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'field_48': 'TextEdit', 'Estimated Total Population': 'TextEdit', 'Estimated Population 5-17': 'TextEdit', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Range', '% 5-17 in poverty': 'TextEdit', });
lyr_RipleySchoolDistrict_14.set('fieldImages', {'FID': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'FID_School': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SCHOOL_': 'Range', 'SCHOOL_ID': 'Range', 'SCHDIST04_': 'TextEdit', 'SCHDIST041': 'TextEdit', 'SCH_LATEST': 'Range', 'SCH_LATE_1': 'Range', 'SCHOOLDIST': 'TextEdit', 'POLYTYPE': 'TextEdit', 'PRIMARYPOL': 'TextEdit', 'USERNAME': 'TextEdit', 'UPDATE_': 'TextEdit', 'EDITED': 'TextEdit', 'RPOLY_': 'Range', 'LPOLY_': 'Range', 'EACODE': 'Range', 'District2': 'TextEdit', 'Inst_ID': 'TextEdit', 'SchDist': 'TextEdit', 'FID_BOCES_': 'Range', 'SEDdir_BOC': 'Range', 'SEDdir_B_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OID_': 'Range', 'ID': 'Range', 'INSTITID': 'TextEdit', 'SED_CODE_1': 'TextEdit', 'POPULAR_NA': 'TextEdit', 'INSTPECD': 'Range', 'INSTSUBYPE': 'Range', 'INSSUBDE': 'TextEdit', 'MUNICODE': 'TextEdit', 'SDLCODE': 'Range', 'ORPTSCOD_1': 'Range', 'Shape_Le_1': 'TextEdit', 'instidNUM': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'field_48': 'TextEdit', 'Estimated Total Population': 'TextEdit', 'Estimated Population 5-17': 'TextEdit', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Range', '% 5-17 in poverty': 'TextEdit', });
lyr_ShermanSchoolDistrict_15.set('fieldImages', {'FID': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'FID_School': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SCHOOL_': 'Range', 'SCHOOL_ID': 'Range', 'SCHDIST04_': 'TextEdit', 'SCHDIST041': 'TextEdit', 'SCH_LATEST': 'Range', 'SCH_LATE_1': 'Range', 'SCHOOLDIST': 'TextEdit', 'POLYTYPE': 'TextEdit', 'PRIMARYPOL': 'TextEdit', 'USERNAME': 'TextEdit', 'UPDATE_': 'TextEdit', 'EDITED': 'TextEdit', 'RPOLY_': 'Range', 'LPOLY_': 'Range', 'EACODE': 'Range', 'District2': 'TextEdit', 'Inst_ID': 'TextEdit', 'SchDist': 'TextEdit', 'FID_BOCES_': 'Range', 'SEDdir_BOC': 'Range', 'SEDdir_B_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OID_': 'Range', 'ID': 'Range', 'INSTITID': 'TextEdit', 'SED_CODE_1': 'TextEdit', 'POPULAR_NA': 'TextEdit', 'INSTPECD': 'Range', 'INSTSUBYPE': 'Range', 'INSSUBDE': 'TextEdit', 'MUNICODE': 'TextEdit', 'SDLCODE': 'Range', 'ORPTSCOD_1': 'Range', 'Shape_Le_1': 'TextEdit', 'instidNUM': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'field_48': 'TextEdit', 'Estimated Total Population': 'TextEdit', 'Estimated Population 5-17': 'TextEdit', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Range', '% 5-17 in poverty': 'TextEdit', });
lyr_SilverCreekSchoolDistrict_16.set('fieldImages', {'FID': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'FID_School': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SCHOOL_': 'Range', 'SCHOOL_ID': 'Range', 'SCHDIST04_': 'TextEdit', 'SCHDIST041': 'TextEdit', 'SCH_LATEST': 'Range', 'SCH_LATE_1': 'Range', 'SCHOOLDIST': 'TextEdit', 'POLYTYPE': 'TextEdit', 'PRIMARYPOL': 'TextEdit', 'USERNAME': 'TextEdit', 'UPDATE_': 'TextEdit', 'EDITED': 'TextEdit', 'RPOLY_': 'Range', 'LPOLY_': 'Range', 'EACODE': 'Range', 'District2': 'TextEdit', 'Inst_ID': 'TextEdit', 'SchDist': 'TextEdit', 'FID_BOCES_': 'Range', 'SEDdir_BOC': 'Range', 'SEDdir_B_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OID_': 'Range', 'ID': 'Range', 'INSTITID': 'TextEdit', 'SED_CODE_1': 'TextEdit', 'POPULAR_NA': 'TextEdit', 'INSTPECD': 'Range', 'INSTSUBYPE': 'Range', 'INSSUBDE': 'TextEdit', 'MUNICODE': 'TextEdit', 'SDLCODE': 'Range', 'ORPTSCOD_1': 'Range', 'Shape_Le_1': 'TextEdit', 'instidNUM': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'field_48': 'TextEdit', 'Estimated Total Population': 'TextEdit', 'Estimated Population 5-17': 'TextEdit', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Range', '% 5-17 in poverty': 'TextEdit', });
lyr_SouthwesternSchoolDistrict_17.set('fieldImages', {'FID': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'FID_School': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SCHOOL_': 'Range', 'SCHOOL_ID': 'Range', 'SCHDIST04_': 'TextEdit', 'SCHDIST041': 'TextEdit', 'SCH_LATEST': 'Range', 'SCH_LATE_1': 'Range', 'SCHOOLDIST': 'TextEdit', 'POLYTYPE': 'TextEdit', 'PRIMARYPOL': 'TextEdit', 'USERNAME': 'TextEdit', 'UPDATE_': 'TextEdit', 'EDITED': 'TextEdit', 'RPOLY_': 'Range', 'LPOLY_': 'Range', 'EACODE': 'Range', 'District2': 'TextEdit', 'Inst_ID': 'TextEdit', 'SchDist': 'TextEdit', 'FID_BOCES_': 'Range', 'SEDdir_BOC': 'Range', 'SEDdir_B_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OID_': 'Range', 'ID': 'Range', 'INSTITID': 'TextEdit', 'SED_CODE_1': 'TextEdit', 'POPULAR_NA': 'TextEdit', 'INSTPECD': 'Range', 'INSTSUBYPE': 'Range', 'INSSUBDE': 'TextEdit', 'MUNICODE': 'TextEdit', 'SDLCODE': 'Range', 'ORPTSCOD_1': 'Range', 'Shape_Le_1': 'TextEdit', 'instidNUM': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'field_48': 'TextEdit', 'Estimated Total Population': 'TextEdit', 'Estimated Population 5-17': 'TextEdit', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'Range', '% 5-17 in poverty': 'TextEdit', });
lyr_WestfieldSchoolDistrict_18.set('fieldImages', {'FID': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'FID_School': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SCHOOL_': 'Range', 'SCHOOL_ID': 'Range', 'SCHDIST04_': 'TextEdit', 'SCHDIST041': 'TextEdit', 'SCH_LATEST': 'Range', 'SCH_LATE_1': 'Range', 'SCHOOLDIST': 'TextEdit', 'POLYTYPE': 'TextEdit', 'PRIMARYPOL': 'TextEdit', 'USERNAME': 'TextEdit', 'UPDATE_': 'TextEdit', 'EDITED': 'TextEdit', 'RPOLY_': 'Range', 'LPOLY_': 'Range', 'EACODE': 'Range', 'District2': 'TextEdit', 'Inst_ID': 'TextEdit', 'SchDist': 'TextEdit', 'FID_BOCES_': 'Range', 'SEDdir_BOC': 'Range', 'SEDdir_B_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OID_': 'Range', 'ID': 'Range', 'INSTITID': 'TextEdit', 'SED_CODE_1': 'TextEdit', 'POPULAR_NA': 'TextEdit', 'INSTPECD': 'Range', 'INSTSUBYPE': 'Range', 'INSSUBDE': 'TextEdit', 'MUNICODE': 'TextEdit', 'SDLCODE': 'Range', 'ORPTSCOD_1': 'Range', 'Shape_Le_1': 'TextEdit', 'instidNUM': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_ChautauquaLakeSchoolDistrict_19.set('fieldImages', {'FID': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'FID_School': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SCHOOL_': 'Range', 'SCHOOL_ID': 'Range', 'SCHDIST04_': 'TextEdit', 'SCHDIST041': 'TextEdit', 'SCH_LATEST': 'Range', 'SCH_LATE_1': 'Range', 'SCHOOLDIST': 'TextEdit', 'POLYTYPE': 'TextEdit', 'PRIMARYPOL': 'TextEdit', 'USERNAME': 'TextEdit', 'UPDATE_': 'TextEdit', 'EDITED': 'TextEdit', 'RPOLY_': 'Range', 'LPOLY_': 'Range', 'EACODE': 'Range', 'District2': 'TextEdit', 'Inst_ID': 'TextEdit', 'SchDist': 'TextEdit', 'FID_BOCES_': 'Range', 'SEDdir_BOC': 'Range', 'SEDdir_B_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OID_': 'Range', 'ID': 'Range', 'INSTITID': 'TextEdit', 'SED_CODE_1': 'TextEdit', 'POPULAR_NA': 'TextEdit', 'INSTPECD': 'Range', 'INSTSUBYPE': 'Range', 'INSSUBDE': 'TextEdit', 'MUNICODE': 'TextEdit', 'SDLCODE': 'Range', 'ORPTSCOD_1': 'Range', 'Shape_Le_1': 'TextEdit', 'instidNUM': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_ChautauquaCounty_Public_School_District_Boundaries_20.set('fieldImages', {'FID': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'FID_School': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SCHOOL_': 'Range', 'SCHOOL_ID': 'Range', 'SCHDIST04_': 'TextEdit', 'SCHDIST041': 'TextEdit', 'SCH_LATEST': 'Range', 'SCH_LATE_1': 'Range', 'SCHOOLDIST': 'TextEdit', 'POLYTYPE': 'TextEdit', 'PRIMARYPOL': 'TextEdit', 'USERNAME': 'TextEdit', 'UPDATE_': 'DateTime', 'EDITED': 'TextEdit', 'RPOLY_': 'Range', 'LPOLY_': 'Range', 'EACODE': 'TextEdit', 'District2': 'TextEdit', 'Inst_ID': 'TextEdit', 'SchDist': 'TextEdit', 'FID_BOCES_': 'Range', 'SEDdir_BOC': 'TextEdit', 'SEDdir_B_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OID_': 'Range', 'ID': 'Range', 'INSTITID': 'TextEdit', 'SED_CODE_1': 'TextEdit', 'POPULAR_NA': 'TextEdit', 'INSTPECD': 'Range', 'INSTSUBYPE': 'Range', 'INSSUBDE': 'TextEdit', 'MUNICODE': 'TextEdit', 'SDLCODE': 'TextEdit', 'ORPTSCOD_1': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'instidNUM': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_Census3085_21.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3084_22.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3083_23.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3082_24.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3081_25.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3075_26.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3074_27.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3073_28.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3072_29.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3071_30.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3064_31.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3063_32.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3062_33.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3061_34.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3055_35.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3054_36.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3053_37.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3052_38.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3051_39.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3044_40.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3043_41.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3042_42.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3041_43.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3032_44.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3031_45.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3025_46.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3024_47.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3023_48.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3022_49.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3021_50.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3011_51.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'BlkGp Name': 'TextEdit', });
lyr_Census3012_52.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3013_53.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3014_54.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_LoveSchoolneighborhoods_55.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Counties_Shoreline_56.set('fieldImages', {'NAME': 'TextEdit', 'ABBREV': 'TextEdit', 'GNIS_ID': 'TextEdit', 'FIPS_CODE': 'TextEdit', 'SWIS': 'TextEdit', 'NYSP_ZONE': 'TextEdit', 'POP1990': 'TextEdit', 'POP2000': 'TextEdit', 'POP2010': 'TextEdit', 'POP2020': 'TextEdit', 'DOS_LL': 'TextEdit', 'DOSLL_DATE': 'DateTime', 'NYC': 'TextEdit', 'CALC_SQ_MI': 'TextEdit', 'DATEMOD': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ChautauquaCountySchools_57.set('fieldImages', {'School Name': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'YEAR': 'Range', 'Contact Name': 'TextEdit', 'Title': 'TextEdit', 'Title 1 Eligible': 'TextEdit', 'K12 total enrollment': 'Range', '% Black': 'Range', '% Hispanic': 'Range', '% White': 'Range', '% Multiracial': 'Range', '% with disabilities': 'Range', '% econ disadvantaged': 'Range', '% homeless': 'Range', '% in foster care': 'Range', 'field_17': 'TextEdit', 'School neighborhood income-to-poverty ratio': 'Range', });
lyr_SELschools2024TGFDonly_58.set('fieldImages', {'School Name': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'field_4': 'TextEdit', 'TGFD': 'TextEdit', 'TGFD grades': 'TextEdit', });
lyr_SELschools2024PAXonly_59.set('fieldImages', {'School Name': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'PAX': 'TextEdit', 'PAX grades': 'TextEdit', });
lyr_SELschools2024SOSonly_60.set('fieldImages', {'School Name': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'SOS': 'TextEdit', });
lyr_FrewsburgSchoolDistrict_2.set('fieldLabels', {'FID': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'FID_School': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SCHOOL_': 'hidden field', 'SCHOOL_ID': 'hidden field', 'SCHDIST04_': 'hidden field', 'SCHDIST041': 'hidden field', 'SCH_LATEST': 'hidden field', 'SCH_LATE_1': 'hidden field', 'SCHOOLDIST': 'hidden field', 'POLYTYPE': 'hidden field', 'PRIMARYPOL': 'hidden field', 'USERNAME': 'hidden field', 'UPDATE_': 'hidden field', 'EDITED': 'hidden field', 'RPOLY_': 'hidden field', 'LPOLY_': 'hidden field', 'EACODE': 'hidden field', 'District2': 'hidden field', 'Inst_ID': 'hidden field', 'SchDist': 'hidden field', 'FID_BOCES_': 'hidden field', 'SEDdir_BOC': 'hidden field', 'SEDdir_B_1': 'hidden field', 'Shape_Leng': 'hidden field', 'OID_': 'hidden field', 'ID': 'hidden field', 'INSTITID': 'hidden field', 'SED_CODE_1': 'hidden field', 'POPULAR_NA': 'hidden field', 'INSTPECD': 'hidden field', 'INSTSUBYPE': 'hidden field', 'INSSUBDE': 'hidden field', 'MUNICODE': 'hidden field', 'SDLCODE': 'hidden field', 'ORPTSCOD_1': 'hidden field', 'Shape_Le_1': 'hidden field', 'instidNUM': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'field_48': 'hidden field', 'Estimated Total Population': 'hidden field', 'Estimated Population 5-17': 'hidden field', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'hidden field', '% 5-17 in poverty': 'hidden field', });
lyr_JamestownSchoolDistrict_3.set('fieldLabels', {'FID': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'FID_School': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SCHOOL_': 'hidden field', 'SCHOOL_ID': 'hidden field', 'SCHDIST04_': 'hidden field', 'SCHDIST041': 'hidden field', 'SCH_LATEST': 'hidden field', 'SCH_LATE_1': 'hidden field', 'SCHOOLDIST': 'hidden field', 'POLYTYPE': 'hidden field', 'PRIMARYPOL': 'hidden field', 'USERNAME': 'hidden field', 'UPDATE_': 'hidden field', 'EDITED': 'hidden field', 'RPOLY_': 'hidden field', 'LPOLY_': 'hidden field', 'EACODE': 'hidden field', 'District2': 'hidden field', 'Inst_ID': 'hidden field', 'SchDist': 'hidden field', 'FID_BOCES_': 'hidden field', 'SEDdir_BOC': 'hidden field', 'SEDdir_B_1': 'hidden field', 'Shape_Leng': 'hidden field', 'OID_': 'hidden field', 'ID': 'hidden field', 'INSTITID': 'hidden field', 'SED_CODE_1': 'hidden field', 'POPULAR_NA': 'hidden field', 'INSTPECD': 'hidden field', 'INSTSUBYPE': 'hidden field', 'INSSUBDE': 'hidden field', 'MUNICODE': 'hidden field', 'SDLCODE': 'hidden field', 'ORPTSCOD_1': 'hidden field', 'Shape_Le_1': 'hidden field', 'instidNUM': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'field_48': 'hidden field', 'Estimated Total Population': 'hidden field', 'Estimated Population 5-17': 'hidden field', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'hidden field', '% 5-17 in poverty': 'hidden field', });
lyr_PanamaSchoolDistrict_4.set('fieldLabels', {'FID': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'FID_School': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SCHOOL_': 'hidden field', 'SCHOOL_ID': 'hidden field', 'SCHDIST04_': 'hidden field', 'SCHDIST041': 'hidden field', 'SCH_LATEST': 'hidden field', 'SCH_LATE_1': 'hidden field', 'SCHOOLDIST': 'hidden field', 'POLYTYPE': 'hidden field', 'PRIMARYPOL': 'hidden field', 'USERNAME': 'hidden field', 'UPDATE_': 'hidden field', 'EDITED': 'hidden field', 'RPOLY_': 'hidden field', 'LPOLY_': 'hidden field', 'EACODE': 'hidden field', 'District2': 'hidden field', 'Inst_ID': 'hidden field', 'SchDist': 'hidden field', 'FID_BOCES_': 'hidden field', 'SEDdir_BOC': 'hidden field', 'SEDdir_B_1': 'hidden field', 'Shape_Leng': 'hidden field', 'OID_': 'hidden field', 'ID': 'hidden field', 'INSTITID': 'hidden field', 'SED_CODE_1': 'hidden field', 'POPULAR_NA': 'hidden field', 'INSTPECD': 'hidden field', 'INSTSUBYPE': 'hidden field', 'INSSUBDE': 'hidden field', 'MUNICODE': 'hidden field', 'SDLCODE': 'hidden field', 'ORPTSCOD_1': 'hidden field', 'Shape_Le_1': 'hidden field', 'instidNUM': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'field_48': 'hidden field', 'Estimated Total Population': 'hidden field', 'Estimated Population 5-17': 'hidden field', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'hidden field', '% 5-17 in poverty': 'hidden field', });
lyr_BemusPointSchoolDistrict_5.set('fieldLabels', {'FID': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'FID_School': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SCHOOL_': 'hidden field', 'SCHOOL_ID': 'hidden field', 'SCHDIST04_': 'hidden field', 'SCHDIST041': 'hidden field', 'SCH_LATEST': 'hidden field', 'SCH_LATE_1': 'hidden field', 'SCHOOLDIST': 'hidden field', 'POLYTYPE': 'hidden field', 'PRIMARYPOL': 'hidden field', 'USERNAME': 'hidden field', 'UPDATE_': 'hidden field', 'EDITED': 'hidden field', 'RPOLY_': 'hidden field', 'LPOLY_': 'hidden field', 'EACODE': 'hidden field', 'District2': 'hidden field', 'Inst_ID': 'hidden field', 'SchDist': 'hidden field', 'FID_BOCES_': 'hidden field', 'SEDdir_BOC': 'hidden field', 'SEDdir_B_1': 'hidden field', 'Shape_Leng': 'hidden field', 'OID_': 'hidden field', 'ID': 'hidden field', 'INSTITID': 'hidden field', 'SED_CODE_1': 'hidden field', 'POPULAR_NA': 'hidden field', 'INSTPECD': 'hidden field', 'INSTSUBYPE': 'hidden field', 'INSSUBDE': 'hidden field', 'MUNICODE': 'hidden field', 'SDLCODE': 'hidden field', 'ORPTSCOD_1': 'hidden field', 'Shape_Le_1': 'hidden field', 'instidNUM': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'field_48': 'hidden field', 'Estimated Total Population': 'hidden field', 'Estimated Population 5-17': 'hidden field', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'hidden field', '% 5-17 in poverty': 'hidden field', });
lyr_BroctonSchoolDistrict_6.set('fieldLabels', {'FID': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'FID_School': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SCHOOL_': 'hidden field', 'SCHOOL_ID': 'hidden field', 'SCHDIST04_': 'hidden field', 'SCHDIST041': 'hidden field', 'SCH_LATEST': 'hidden field', 'SCH_LATE_1': 'hidden field', 'SCHOOLDIST': 'hidden field', 'POLYTYPE': 'hidden field', 'PRIMARYPOL': 'hidden field', 'USERNAME': 'hidden field', 'UPDATE_': 'hidden field', 'EDITED': 'hidden field', 'RPOLY_': 'hidden field', 'LPOLY_': 'hidden field', 'EACODE': 'hidden field', 'District2': 'hidden field', 'Inst_ID': 'hidden field', 'SchDist': 'hidden field', 'FID_BOCES_': 'hidden field', 'SEDdir_BOC': 'hidden field', 'SEDdir_B_1': 'hidden field', 'Shape_Leng': 'hidden field', 'OID_': 'hidden field', 'ID': 'hidden field', 'INSTITID': 'hidden field', 'SED_CODE_1': 'hidden field', 'POPULAR_NA': 'hidden field', 'INSTPECD': 'hidden field', 'INSTSUBYPE': 'hidden field', 'INSSUBDE': 'hidden field', 'MUNICODE': 'hidden field', 'SDLCODE': 'hidden field', 'ORPTSCOD_1': 'hidden field', 'Shape_Le_1': 'hidden field', 'instidNUM': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'field_48': 'hidden field', 'Estimated Total Population': 'hidden field', 'Estimated Population 5-17': 'hidden field', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'hidden field', '% 5-17 in poverty': 'hidden field', });
lyr_CassadagaSchoolDistrict_7.set('fieldLabels', {'FID': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'FID_School': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SCHOOL_': 'hidden field', 'SCHOOL_ID': 'hidden field', 'SCHDIST04_': 'hidden field', 'SCHDIST041': 'hidden field', 'SCH_LATEST': 'hidden field', 'SCH_LATE_1': 'hidden field', 'SCHOOLDIST': 'hidden field', 'POLYTYPE': 'hidden field', 'PRIMARYPOL': 'hidden field', 'USERNAME': 'hidden field', 'UPDATE_': 'hidden field', 'EDITED': 'hidden field', 'RPOLY_': 'hidden field', 'LPOLY_': 'hidden field', 'EACODE': 'hidden field', 'District2': 'hidden field', 'Inst_ID': 'hidden field', 'SchDist': 'hidden field', 'FID_BOCES_': 'hidden field', 'SEDdir_BOC': 'hidden field', 'SEDdir_B_1': 'hidden field', 'Shape_Leng': 'hidden field', 'OID_': 'hidden field', 'ID': 'hidden field', 'INSTITID': 'hidden field', 'SED_CODE_1': 'hidden field', 'POPULAR_NA': 'hidden field', 'INSTPECD': 'hidden field', 'INSTSUBYPE': 'hidden field', 'INSSUBDE': 'hidden field', 'MUNICODE': 'hidden field', 'SDLCODE': 'hidden field', 'ORPTSCOD_1': 'hidden field', 'Shape_Le_1': 'hidden field', 'instidNUM': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'field_48': 'hidden field', 'Estimated Total Population': 'hidden field', 'Estimated Population 5-17': 'hidden field', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'hidden field', '% 5-17 in poverty': 'hidden field', });
lyr_ClymerSchoolDistrict_8.set('fieldLabels', {'FID': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'FID_School': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SCHOOL_': 'hidden field', 'SCHOOL_ID': 'hidden field', 'SCHDIST04_': 'hidden field', 'SCHDIST041': 'hidden field', 'SCH_LATEST': 'hidden field', 'SCH_LATE_1': 'hidden field', 'SCHOOLDIST': 'hidden field', 'POLYTYPE': 'hidden field', 'PRIMARYPOL': 'hidden field', 'USERNAME': 'hidden field', 'UPDATE_': 'hidden field', 'EDITED': 'hidden field', 'RPOLY_': 'hidden field', 'LPOLY_': 'hidden field', 'EACODE': 'hidden field', 'District2': 'hidden field', 'Inst_ID': 'hidden field', 'SchDist': 'hidden field', 'FID_BOCES_': 'hidden field', 'SEDdir_BOC': 'hidden field', 'SEDdir_B_1': 'hidden field', 'Shape_Leng': 'hidden field', 'OID_': 'hidden field', 'ID': 'hidden field', 'INSTITID': 'hidden field', 'SED_CODE_1': 'hidden field', 'POPULAR_NA': 'hidden field', 'INSTPECD': 'hidden field', 'INSTSUBYPE': 'hidden field', 'INSSUBDE': 'hidden field', 'MUNICODE': 'hidden field', 'SDLCODE': 'hidden field', 'ORPTSCOD_1': 'hidden field', 'Shape_Le_1': 'hidden field', 'instidNUM': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'field_48': 'hidden field', 'Estimated Total Population': 'hidden field', 'Estimated Population 5-17': 'hidden field', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'hidden field', '% 5-17 in poverty': 'hidden field', });
lyr_DunkirkSchoolDistrict_9.set('fieldLabels', {'FID': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'FID_School': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SCHOOL_': 'hidden field', 'SCHOOL_ID': 'hidden field', 'SCHDIST04_': 'hidden field', 'SCHDIST041': 'hidden field', 'SCH_LATEST': 'hidden field', 'SCH_LATE_1': 'hidden field', 'SCHOOLDIST': 'hidden field', 'POLYTYPE': 'hidden field', 'PRIMARYPOL': 'hidden field', 'USERNAME': 'hidden field', 'UPDATE_': 'hidden field', 'EDITED': 'hidden field', 'RPOLY_': 'hidden field', 'LPOLY_': 'hidden field', 'EACODE': 'hidden field', 'District2': 'hidden field', 'Inst_ID': 'hidden field', 'SchDist': 'hidden field', 'FID_BOCES_': 'hidden field', 'SEDdir_BOC': 'hidden field', 'SEDdir_B_1': 'hidden field', 'Shape_Leng': 'hidden field', 'OID_': 'hidden field', 'ID': 'hidden field', 'INSTITID': 'hidden field', 'SED_CODE_1': 'hidden field', 'POPULAR_NA': 'hidden field', 'INSTPECD': 'hidden field', 'INSTSUBYPE': 'hidden field', 'INSSUBDE': 'hidden field', 'MUNICODE': 'hidden field', 'SDLCODE': 'hidden field', 'ORPTSCOD_1': 'hidden field', 'Shape_Le_1': 'hidden field', 'instidNUM': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'field_48': 'hidden field', 'Estimated Total Population': 'hidden field', 'Estimated Population 5-17': 'hidden field', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'hidden field', '% 5-17 in poverty': 'hidden field', });
lyr_FalconerSchoolDistrict_10.set('fieldLabels', {'FID': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'FID_School': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SCHOOL_': 'hidden field', 'SCHOOL_ID': 'hidden field', 'SCHDIST04_': 'hidden field', 'SCHDIST041': 'hidden field', 'SCH_LATEST': 'hidden field', 'SCH_LATE_1': 'hidden field', 'SCHOOLDIST': 'hidden field', 'POLYTYPE': 'hidden field', 'PRIMARYPOL': 'hidden field', 'USERNAME': 'hidden field', 'UPDATE_': 'hidden field', 'EDITED': 'hidden field', 'RPOLY_': 'hidden field', 'LPOLY_': 'hidden field', 'EACODE': 'hidden field', 'District2': 'hidden field', 'Inst_ID': 'hidden field', 'SchDist': 'hidden field', 'FID_BOCES_': 'hidden field', 'SEDdir_BOC': 'hidden field', 'SEDdir_B_1': 'hidden field', 'Shape_Leng': 'hidden field', 'OID_': 'hidden field', 'ID': 'hidden field', 'INSTITID': 'hidden field', 'SED_CODE_1': 'hidden field', 'POPULAR_NA': 'hidden field', 'INSTPECD': 'hidden field', 'INSTSUBYPE': 'hidden field', 'INSSUBDE': 'hidden field', 'MUNICODE': 'hidden field', 'SDLCODE': 'hidden field', 'ORPTSCOD_1': 'hidden field', 'Shape_Le_1': 'hidden field', 'instidNUM': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'field_48': 'hidden field', 'Estimated Total Population': 'hidden field', 'Estimated Population 5-17': 'hidden field', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'hidden field', '% 5-17 in poverty': 'hidden field', });
lyr_ForestvilleSchoolDistrict_11.set('fieldLabels', {'FID': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'FID_School': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SCHOOL_': 'hidden field', 'SCHOOL_ID': 'hidden field', 'SCHDIST04_': 'hidden field', 'SCHDIST041': 'hidden field', 'SCH_LATEST': 'hidden field', 'SCH_LATE_1': 'hidden field', 'SCHOOLDIST': 'hidden field', 'POLYTYPE': 'hidden field', 'PRIMARYPOL': 'hidden field', 'USERNAME': 'hidden field', 'UPDATE_': 'hidden field', 'EDITED': 'hidden field', 'RPOLY_': 'hidden field', 'LPOLY_': 'hidden field', 'EACODE': 'hidden field', 'District2': 'hidden field', 'Inst_ID': 'hidden field', 'SchDist': 'hidden field', 'FID_BOCES_': 'hidden field', 'SEDdir_BOC': 'hidden field', 'SEDdir_B_1': 'hidden field', 'Shape_Leng': 'hidden field', 'OID_': 'hidden field', 'ID': 'hidden field', 'INSTITID': 'hidden field', 'SED_CODE_1': 'hidden field', 'POPULAR_NA': 'hidden field', 'INSTPECD': 'hidden field', 'INSTSUBYPE': 'hidden field', 'INSSUBDE': 'hidden field', 'MUNICODE': 'hidden field', 'SDLCODE': 'hidden field', 'ORPTSCOD_1': 'hidden field', 'Shape_Le_1': 'hidden field', 'instidNUM': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'field_48': 'hidden field', 'Estimated Total Population': 'hidden field', 'Estimated Population 5-17': 'hidden field', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'hidden field', '% 5-17 in poverty': 'hidden field', });
lyr_FredoniaSchoolDistrict_12.set('fieldLabels', {'FID': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'FID_School': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SCHOOL_': 'hidden field', 'SCHOOL_ID': 'hidden field', 'SCHDIST04_': 'hidden field', 'SCHDIST041': 'hidden field', 'SCH_LATEST': 'hidden field', 'SCH_LATE_1': 'hidden field', 'SCHOOLDIST': 'hidden field', 'POLYTYPE': 'hidden field', 'PRIMARYPOL': 'hidden field', 'USERNAME': 'hidden field', 'UPDATE_': 'hidden field', 'EDITED': 'hidden field', 'RPOLY_': 'hidden field', 'LPOLY_': 'hidden field', 'EACODE': 'hidden field', 'District2': 'hidden field', 'Inst_ID': 'hidden field', 'SchDist': 'hidden field', 'FID_BOCES_': 'hidden field', 'SEDdir_BOC': 'hidden field', 'SEDdir_B_1': 'hidden field', 'Shape_Leng': 'hidden field', 'OID_': 'hidden field', 'ID': 'hidden field', 'INSTITID': 'hidden field', 'SED_CODE_1': 'hidden field', 'POPULAR_NA': 'hidden field', 'INSTPECD': 'hidden field', 'INSTSUBYPE': 'hidden field', 'INSSUBDE': 'hidden field', 'MUNICODE': 'hidden field', 'SDLCODE': 'hidden field', 'ORPTSCOD_1': 'hidden field', 'Shape_Le_1': 'hidden field', 'instidNUM': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'field_48': 'hidden field', 'Estimated Total Population': 'hidden field', 'Estimated Population 5-17': 'hidden field', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'hidden field', '% 5-17 in poverty': 'hidden field', });
lyr_PineValleySchoolDistrict_13.set('fieldLabels', {'FID': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'FID_School': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SCHOOL_': 'hidden field', 'SCHOOL_ID': 'hidden field', 'SCHDIST04_': 'hidden field', 'SCHDIST041': 'hidden field', 'SCH_LATEST': 'hidden field', 'SCH_LATE_1': 'hidden field', 'SCHOOLDIST': 'hidden field', 'POLYTYPE': 'hidden field', 'PRIMARYPOL': 'hidden field', 'USERNAME': 'hidden field', 'UPDATE_': 'hidden field', 'EDITED': 'hidden field', 'RPOLY_': 'hidden field', 'LPOLY_': 'hidden field', 'EACODE': 'hidden field', 'District2': 'hidden field', 'Inst_ID': 'hidden field', 'SchDist': 'hidden field', 'FID_BOCES_': 'hidden field', 'SEDdir_BOC': 'hidden field', 'SEDdir_B_1': 'hidden field', 'Shape_Leng': 'hidden field', 'OID_': 'hidden field', 'ID': 'hidden field', 'INSTITID': 'hidden field', 'SED_CODE_1': 'hidden field', 'POPULAR_NA': 'hidden field', 'INSTPECD': 'hidden field', 'INSTSUBYPE': 'hidden field', 'INSSUBDE': 'hidden field', 'MUNICODE': 'hidden field', 'SDLCODE': 'hidden field', 'ORPTSCOD_1': 'hidden field', 'Shape_Le_1': 'hidden field', 'instidNUM': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'field_48': 'hidden field', 'Estimated Total Population': 'hidden field', 'Estimated Population 5-17': 'hidden field', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'hidden field', '% 5-17 in poverty': 'hidden field', });
lyr_RipleySchoolDistrict_14.set('fieldLabels', {'FID': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'FID_School': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SCHOOL_': 'hidden field', 'SCHOOL_ID': 'hidden field', 'SCHDIST04_': 'hidden field', 'SCHDIST041': 'hidden field', 'SCH_LATEST': 'hidden field', 'SCH_LATE_1': 'hidden field', 'SCHOOLDIST': 'hidden field', 'POLYTYPE': 'hidden field', 'PRIMARYPOL': 'hidden field', 'USERNAME': 'hidden field', 'UPDATE_': 'hidden field', 'EDITED': 'hidden field', 'RPOLY_': 'hidden field', 'LPOLY_': 'hidden field', 'EACODE': 'hidden field', 'District2': 'hidden field', 'Inst_ID': 'hidden field', 'SchDist': 'hidden field', 'FID_BOCES_': 'hidden field', 'SEDdir_BOC': 'hidden field', 'SEDdir_B_1': 'hidden field', 'Shape_Leng': 'hidden field', 'OID_': 'hidden field', 'ID': 'hidden field', 'INSTITID': 'hidden field', 'SED_CODE_1': 'hidden field', 'POPULAR_NA': 'hidden field', 'INSTPECD': 'hidden field', 'INSTSUBYPE': 'hidden field', 'INSSUBDE': 'hidden field', 'MUNICODE': 'hidden field', 'SDLCODE': 'hidden field', 'ORPTSCOD_1': 'hidden field', 'Shape_Le_1': 'hidden field', 'instidNUM': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'field_48': 'hidden field', 'Estimated Total Population': 'hidden field', 'Estimated Population 5-17': 'hidden field', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'hidden field', '% 5-17 in poverty': 'hidden field', });
lyr_ShermanSchoolDistrict_15.set('fieldLabels', {'FID': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'FID_School': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SCHOOL_': 'hidden field', 'SCHOOL_ID': 'hidden field', 'SCHDIST04_': 'hidden field', 'SCHDIST041': 'hidden field', 'SCH_LATEST': 'hidden field', 'SCH_LATE_1': 'hidden field', 'SCHOOLDIST': 'hidden field', 'POLYTYPE': 'hidden field', 'PRIMARYPOL': 'hidden field', 'USERNAME': 'hidden field', 'UPDATE_': 'hidden field', 'EDITED': 'hidden field', 'RPOLY_': 'hidden field', 'LPOLY_': 'hidden field', 'EACODE': 'hidden field', 'District2': 'hidden field', 'Inst_ID': 'hidden field', 'SchDist': 'hidden field', 'FID_BOCES_': 'hidden field', 'SEDdir_BOC': 'hidden field', 'SEDdir_B_1': 'hidden field', 'Shape_Leng': 'hidden field', 'OID_': 'hidden field', 'ID': 'hidden field', 'INSTITID': 'hidden field', 'SED_CODE_1': 'hidden field', 'POPULAR_NA': 'hidden field', 'INSTPECD': 'hidden field', 'INSTSUBYPE': 'hidden field', 'INSSUBDE': 'hidden field', 'MUNICODE': 'hidden field', 'SDLCODE': 'hidden field', 'ORPTSCOD_1': 'hidden field', 'Shape_Le_1': 'hidden field', 'instidNUM': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'field_48': 'hidden field', 'Estimated Total Population': 'hidden field', 'Estimated Population 5-17': 'hidden field', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'hidden field', '% 5-17 in poverty': 'hidden field', });
lyr_SilverCreekSchoolDistrict_16.set('fieldLabels', {'FID': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'FID_School': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SCHOOL_': 'hidden field', 'SCHOOL_ID': 'hidden field', 'SCHDIST04_': 'hidden field', 'SCHDIST041': 'hidden field', 'SCH_LATEST': 'hidden field', 'SCH_LATE_1': 'hidden field', 'SCHOOLDIST': 'hidden field', 'POLYTYPE': 'hidden field', 'PRIMARYPOL': 'hidden field', 'USERNAME': 'hidden field', 'UPDATE_': 'hidden field', 'EDITED': 'hidden field', 'RPOLY_': 'hidden field', 'LPOLY_': 'hidden field', 'EACODE': 'hidden field', 'District2': 'hidden field', 'Inst_ID': 'hidden field', 'SchDist': 'hidden field', 'FID_BOCES_': 'hidden field', 'SEDdir_BOC': 'hidden field', 'SEDdir_B_1': 'hidden field', 'Shape_Leng': 'hidden field', 'OID_': 'hidden field', 'ID': 'hidden field', 'INSTITID': 'hidden field', 'SED_CODE_1': 'hidden field', 'POPULAR_NA': 'hidden field', 'INSTPECD': 'hidden field', 'INSTSUBYPE': 'hidden field', 'INSSUBDE': 'hidden field', 'MUNICODE': 'hidden field', 'SDLCODE': 'hidden field', 'ORPTSCOD_1': 'hidden field', 'Shape_Le_1': 'hidden field', 'instidNUM': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'field_48': 'hidden field', 'Estimated Total Population': 'hidden field', 'Estimated Population 5-17': 'hidden field', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'hidden field', '% 5-17 in poverty': 'hidden field', });
lyr_SouthwesternSchoolDistrict_17.set('fieldLabels', {'FID': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'FID_School': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SCHOOL_': 'hidden field', 'SCHOOL_ID': 'hidden field', 'SCHDIST04_': 'hidden field', 'SCHDIST041': 'hidden field', 'SCH_LATEST': 'hidden field', 'SCH_LATE_1': 'hidden field', 'SCHOOLDIST': 'hidden field', 'POLYTYPE': 'hidden field', 'PRIMARYPOL': 'hidden field', 'USERNAME': 'hidden field', 'UPDATE_': 'hidden field', 'EDITED': 'hidden field', 'RPOLY_': 'hidden field', 'LPOLY_': 'hidden field', 'EACODE': 'hidden field', 'District2': 'hidden field', 'Inst_ID': 'hidden field', 'SchDist': 'hidden field', 'FID_BOCES_': 'hidden field', 'SEDdir_BOC': 'hidden field', 'SEDdir_B_1': 'hidden field', 'Shape_Leng': 'hidden field', 'OID_': 'hidden field', 'ID': 'hidden field', 'INSTITID': 'hidden field', 'SED_CODE_1': 'hidden field', 'POPULAR_NA': 'hidden field', 'INSTPECD': 'hidden field', 'INSTSUBYPE': 'hidden field', 'INSSUBDE': 'hidden field', 'MUNICODE': 'hidden field', 'SDLCODE': 'hidden field', 'ORPTSCOD_1': 'hidden field', 'Shape_Le_1': 'hidden field', 'instidNUM': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'field_48': 'hidden field', 'Estimated Total Population': 'hidden field', 'Estimated Population 5-17': 'hidden field', 'Estimated number of relevant children 5 to 17 years old in poverty who are related to the householder': 'hidden field', '% 5-17 in poverty': 'hidden field', });
lyr_WestfieldSchoolDistrict_18.set('fieldLabels', {'FID': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'FID_School': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SCHOOL_': 'hidden field', 'SCHOOL_ID': 'hidden field', 'SCHDIST04_': 'hidden field', 'SCHDIST041': 'hidden field', 'SCH_LATEST': 'hidden field', 'SCH_LATE_1': 'hidden field', 'SCHOOLDIST': 'hidden field', 'POLYTYPE': 'hidden field', 'PRIMARYPOL': 'hidden field', 'USERNAME': 'hidden field', 'UPDATE_': 'hidden field', 'EDITED': 'hidden field', 'RPOLY_': 'hidden field', 'LPOLY_': 'hidden field', 'EACODE': 'hidden field', 'District2': 'hidden field', 'Inst_ID': 'hidden field', 'SchDist': 'hidden field', 'FID_BOCES_': 'hidden field', 'SEDdir_BOC': 'hidden field', 'SEDdir_B_1': 'hidden field', 'Shape_Leng': 'hidden field', 'OID_': 'hidden field', 'ID': 'hidden field', 'INSTITID': 'hidden field', 'SED_CODE_1': 'hidden field', 'POPULAR_NA': 'hidden field', 'INSTPECD': 'hidden field', 'INSTSUBYPE': 'hidden field', 'INSSUBDE': 'hidden field', 'MUNICODE': 'hidden field', 'SDLCODE': 'hidden field', 'ORPTSCOD_1': 'hidden field', 'Shape_Le_1': 'hidden field', 'instidNUM': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', });
lyr_ChautauquaLakeSchoolDistrict_19.set('fieldLabels', {'FID': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'FID_School': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SCHOOL_': 'hidden field', 'SCHOOL_ID': 'hidden field', 'SCHDIST04_': 'hidden field', 'SCHDIST041': 'hidden field', 'SCH_LATEST': 'hidden field', 'SCH_LATE_1': 'hidden field', 'SCHOOLDIST': 'hidden field', 'POLYTYPE': 'hidden field', 'PRIMARYPOL': 'hidden field', 'USERNAME': 'hidden field', 'UPDATE_': 'hidden field', 'EDITED': 'hidden field', 'RPOLY_': 'hidden field', 'LPOLY_': 'hidden field', 'EACODE': 'hidden field', 'District2': 'hidden field', 'Inst_ID': 'hidden field', 'SchDist': 'hidden field', 'FID_BOCES_': 'hidden field', 'SEDdir_BOC': 'hidden field', 'SEDdir_B_1': 'hidden field', 'Shape_Leng': 'hidden field', 'OID_': 'hidden field', 'ID': 'hidden field', 'INSTITID': 'hidden field', 'SED_CODE_1': 'hidden field', 'POPULAR_NA': 'hidden field', 'INSTPECD': 'hidden field', 'INSTSUBYPE': 'hidden field', 'INSSUBDE': 'hidden field', 'MUNICODE': 'hidden field', 'SDLCODE': 'hidden field', 'ORPTSCOD_1': 'hidden field', 'Shape_Le_1': 'hidden field', 'instidNUM': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', });
lyr_ChautauquaCounty_Public_School_District_Boundaries_20.set('fieldLabels', {'FID': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'FID_School': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SCHOOL_': 'hidden field', 'SCHOOL_ID': 'hidden field', 'SCHDIST04_': 'hidden field', 'SCHDIST041': 'hidden field', 'SCH_LATEST': 'hidden field', 'SCH_LATE_1': 'hidden field', 'SCHOOLDIST': 'hidden field', 'POLYTYPE': 'hidden field', 'PRIMARYPOL': 'hidden field', 'USERNAME': 'hidden field', 'UPDATE_': 'hidden field', 'EDITED': 'hidden field', 'RPOLY_': 'hidden field', 'LPOLY_': 'hidden field', 'EACODE': 'hidden field', 'District2': 'hidden field', 'Inst_ID': 'hidden field', 'SchDist': 'hidden field', 'FID_BOCES_': 'hidden field', 'SEDdir_BOC': 'hidden field', 'SEDdir_B_1': 'hidden field', 'Shape_Leng': 'hidden field', 'OID_': 'hidden field', 'ID': 'hidden field', 'INSTITID': 'hidden field', 'SED_CODE_1': 'hidden field', 'POPULAR_NA': 'hidden field', 'INSTPECD': 'hidden field', 'INSTSUBYPE': 'hidden field', 'INSSUBDE': 'hidden field', 'MUNICODE': 'hidden field', 'SDLCODE': 'hidden field', 'ORPTSCOD_1': 'hidden field', 'Shape_Le_1': 'hidden field', 'instidNUM': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', });
lyr_Census3085_21.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3084_22.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3083_23.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3082_24.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3081_25.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3075_26.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3074_27.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3073_28.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3072_29.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'header label - visible with data', 'Blk Gp Name': 'hidden field', });
lyr_Census3071_30.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3064_31.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3063_32.set('fieldLabels', {'fid': 'hidden field', 'begin': 'header label - visible with data', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3062_33.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3061_34.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3055_35.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3054_36.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3053_37.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3052_38.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3051_39.set('fieldLabels', {'fid': 'header label - visible with data', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3044_40.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3043_41.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3042_42.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3041_43.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3032_44.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3031_45.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3025_46.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3024_47.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3023_48.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3022_49.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3021_50.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3011_51.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'BlkGp Name': 'hidden field', });
lyr_Census3012_52.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3013_53.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3014_54.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_LoveSchoolneighborhoods_55.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', });
lyr_Counties_Shoreline_56.set('fieldLabels', {'NAME': 'hidden field', 'ABBREV': 'hidden field', 'GNIS_ID': 'hidden field', 'FIPS_CODE': 'hidden field', 'SWIS': 'hidden field', 'NYSP_ZONE': 'hidden field', 'POP1990': 'hidden field', 'POP2000': 'hidden field', 'POP2010': 'hidden field', 'POP2020': 'hidden field', 'DOS_LL': 'hidden field', 'DOSLL_DATE': 'hidden field', 'NYC': 'hidden field', 'CALC_SQ_MI': 'hidden field', 'DATEMOD': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_ChautauquaCountySchools_57.set('fieldLabels', {'School Name': 'inline label - always visible', 'LAT': 'hidden field', 'LON': 'hidden field', 'YEAR': 'hidden field', 'Contact Name': 'inline label - always visible', 'Title': 'inline label - always visible', 'Title 1 Eligible': 'inline label - always visible', 'K12 total enrollment': 'inline label - always visible', '% Black': 'inline label - always visible', '% Hispanic': 'inline label - always visible', '% White': 'inline label - always visible', '% Multiracial': 'inline label - always visible', '% with disabilities': 'inline label - always visible', '% econ disadvantaged': 'inline label - always visible', '% homeless': 'inline label - always visible', '% in foster care': 'inline label - always visible', 'field_17': 'hidden field', 'School neighborhood income-to-poverty ratio': 'inline label - always visible', });
lyr_SELschools2024TGFDonly_58.set('fieldLabels', {'School Name': 'no label', 'LAT': 'no label', 'LON': 'no label', 'field_4': 'no label', 'TGFD': 'no label', 'TGFD grades': 'no label', });
lyr_SELschools2024PAXonly_59.set('fieldLabels', {'School Name': 'no label', 'LAT': 'no label', 'LON': 'no label', 'PAX': 'no label', 'PAX grades': 'no label', });
lyr_SELschools2024SOSonly_60.set('fieldLabels', {'School Name': 'no label', 'LAT': 'no label', 'LON': 'no label', 'SOS': 'no label', });
lyr_SELschools2024SOSonly_60.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});