var wms_layers = [];


        var lyr_Argenmap_0 = new ol.layer.Tile({
            'title': 'Argenmap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });
var format_E_EspinalUnidades_de_vegetacin_1 = new ol.format.GeoJSON();
var features_E_EspinalUnidades_de_vegetacin_1 = format_E_EspinalUnidades_de_vegetacin_1.readFeatures(json_E_EspinalUnidades_de_vegetacin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_EspinalUnidades_de_vegetacin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_EspinalUnidades_de_vegetacin_1.addFeatures(features_E_EspinalUnidades_de_vegetacin_1);
var lyr_E_EspinalUnidades_de_vegetacin_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_EspinalUnidades_de_vegetacin_1, 
                style: style_E_EspinalUnidades_de_vegetacin_1,
                popuplayertitle: 'E_Espinal — Unidades_de_vegetación',
                interactive: false,
                title: '<img src="styles/legend/E_EspinalUnidades_de_vegetacin_1.png" /> E_Espinal — Unidades_de_vegetación'
            });
var format_E_EspinalSuelos_2 = new ol.format.GeoJSON();
var features_E_EspinalSuelos_2 = format_E_EspinalSuelos_2.readFeatures(json_E_EspinalSuelos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_EspinalSuelos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_EspinalSuelos_2.addFeatures(features_E_EspinalSuelos_2);
var lyr_E_EspinalSuelos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_EspinalSuelos_2, 
                style: style_E_EspinalSuelos_2,
                popuplayertitle: 'E_Espinal — Suelos',
                interactive: false,
                title: '<img src="styles/legend/E_EspinalSuelos_2.png" /> E_Espinal — Suelos'
            });
var format_E_EspinalSitios_RAMSAR_3 = new ol.format.GeoJSON();
var features_E_EspinalSitios_RAMSAR_3 = format_E_EspinalSitios_RAMSAR_3.readFeatures(json_E_EspinalSitios_RAMSAR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_EspinalSitios_RAMSAR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_EspinalSitios_RAMSAR_3.addFeatures(features_E_EspinalSitios_RAMSAR_3);
var lyr_E_EspinalSitios_RAMSAR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_EspinalSitios_RAMSAR_3, 
                style: style_E_EspinalSitios_RAMSAR_3,
                popuplayertitle: 'E_Espinal — Sitios_RAMSAR',
                interactive: false,
                title: '<img src="styles/legend/E_EspinalSitios_RAMSAR_3.png" /> E_Espinal — Sitios_RAMSAR'
            });
var format_E_EspinalPrdida_de_tierras_forestales_4 = new ol.format.GeoJSON();
var features_E_EspinalPrdida_de_tierras_forestales_4 = format_E_EspinalPrdida_de_tierras_forestales_4.readFeatures(json_E_EspinalPrdida_de_tierras_forestales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_EspinalPrdida_de_tierras_forestales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_EspinalPrdida_de_tierras_forestales_4.addFeatures(features_E_EspinalPrdida_de_tierras_forestales_4);
var lyr_E_EspinalPrdida_de_tierras_forestales_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_EspinalPrdida_de_tierras_forestales_4, 
                style: style_E_EspinalPrdida_de_tierras_forestales_4,
                popuplayertitle: 'E_Espinal — Pérdida_de_tierras_forestales',
                interactive: false,
                title: '<img src="styles/legend/E_EspinalPrdida_de_tierras_forestales_4.png" /> E_Espinal — Pérdida_de_tierras_forestales'
            });
var format_E_Espinalndice_de_aridez_5 = new ol.format.GeoJSON();
var features_E_Espinalndice_de_aridez_5 = format_E_Espinalndice_de_aridez_5.readFeatures(json_E_Espinalndice_de_aridez_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_Espinalndice_de_aridez_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_Espinalndice_de_aridez_5.addFeatures(features_E_Espinalndice_de_aridez_5);
var lyr_E_Espinalndice_de_aridez_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_Espinalndice_de_aridez_5, 
                style: style_E_Espinalndice_de_aridez_5,
                popuplayertitle: 'E_Espinal — Índice_de_aridez',
                interactive: false,
                title: '<img src="styles/legend/E_Espinalndice_de_aridez_5.png" /> E_Espinal — Índice_de_aridez'
            });
var format_E_EspinalIncendios_6 = new ol.format.GeoJSON();
var features_E_EspinalIncendios_6 = format_E_EspinalIncendios_6.readFeatures(json_E_EspinalIncendios_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_EspinalIncendios_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_EspinalIncendios_6.addFeatures(features_E_EspinalIncendios_6);
var lyr_E_EspinalIncendios_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_EspinalIncendios_6, 
                style: style_E_EspinalIncendios_6,
                popuplayertitle: 'E_Espinal — Incendios',
                interactive: false,
                title: '<img src="styles/legend/E_EspinalIncendios_6.png" /> E_Espinal — Incendios'
            });
var format_E_EspinalHumedales_7 = new ol.format.GeoJSON();
var features_E_EspinalHumedales_7 = format_E_EspinalHumedales_7.readFeatures(json_E_EspinalHumedales_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_EspinalHumedales_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_EspinalHumedales_7.addFeatures(features_E_EspinalHumedales_7);
var lyr_E_EspinalHumedales_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_EspinalHumedales_7, 
                style: style_E_EspinalHumedales_7,
                popuplayertitle: 'E_Espinal — Humedales',
                interactive: false,
                title: '<img src="styles/legend/E_EspinalHumedales_7.png" /> E_Espinal — Humedales'
            });
var format_E_Espinaljidos_urbanos_8 = new ol.format.GeoJSON();
var features_E_Espinaljidos_urbanos_8 = format_E_Espinaljidos_urbanos_8.readFeatures(json_E_Espinaljidos_urbanos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_Espinaljidos_urbanos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_Espinaljidos_urbanos_8.addFeatures(features_E_Espinaljidos_urbanos_8);
var lyr_E_Espinaljidos_urbanos_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_Espinaljidos_urbanos_8, 
                style: style_E_Espinaljidos_urbanos_8,
                popuplayertitle: 'E_Espinal — Éjidos_urbanos',
                interactive: false,
                title: '<img src="styles/legend/E_Espinaljidos_urbanos_8.png" /> E_Espinal — Éjidos_urbanos'
            });
var format_E_EspinalEcorregin_9 = new ol.format.GeoJSON();
var features_E_EspinalEcorregin_9 = format_E_EspinalEcorregin_9.readFeatures(json_E_EspinalEcorregin_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_EspinalEcorregin_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_EspinalEcorregin_9.addFeatures(features_E_EspinalEcorregin_9);
var lyr_E_EspinalEcorregin_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_EspinalEcorregin_9, 
                style: style_E_EspinalEcorregin_9,
                popuplayertitle: 'E_Espinal — Ecorregión',
                interactive: false,
                title: '<img src="styles/legend/E_EspinalEcorregin_9.png" /> E_Espinal — Ecorregión'
            });
var format_E_EspinalDimensin_biofsica_10 = new ol.format.GeoJSON();
var features_E_EspinalDimensin_biofsica_10 = format_E_EspinalDimensin_biofsica_10.readFeatures(json_E_EspinalDimensin_biofsica_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_EspinalDimensin_biofsica_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_EspinalDimensin_biofsica_10.addFeatures(features_E_EspinalDimensin_biofsica_10);
var lyr_E_EspinalDimensin_biofsica_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_EspinalDimensin_biofsica_10, 
                style: style_E_EspinalDimensin_biofsica_10,
                popuplayertitle: 'E_Espinal — Dimensión_biofísica',
                interactive: false,
                title: '<img src="styles/legend/E_EspinalDimensin_biofsica_10.png" /> E_Espinal — Dimensión_biofísica'
            });
var format_E_EspinalCuencas_hidrogrficas_11 = new ol.format.GeoJSON();
var features_E_EspinalCuencas_hidrogrficas_11 = format_E_EspinalCuencas_hidrogrficas_11.readFeatures(json_E_EspinalCuencas_hidrogrficas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_EspinalCuencas_hidrogrficas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_EspinalCuencas_hidrogrficas_11.addFeatures(features_E_EspinalCuencas_hidrogrficas_11);
var lyr_E_EspinalCuencas_hidrogrficas_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_EspinalCuencas_hidrogrficas_11, 
                style: style_E_EspinalCuencas_hidrogrficas_11,
                popuplayertitle: 'E_Espinal — Cuencas_hidrográficas',
                interactive: false,
                title: '<img src="styles/legend/E_EspinalCuencas_hidrogrficas_11.png" /> E_Espinal — Cuencas_hidrográficas'
            });
var format_E_EspinalBiodiversidad_12 = new ol.format.GeoJSON();
var features_E_EspinalBiodiversidad_12 = format_E_EspinalBiodiversidad_12.readFeatures(json_E_EspinalBiodiversidad_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_EspinalBiodiversidad_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_EspinalBiodiversidad_12.addFeatures(features_E_EspinalBiodiversidad_12);
var lyr_E_EspinalBiodiversidad_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_EspinalBiodiversidad_12, 
                style: style_E_EspinalBiodiversidad_12,
                popuplayertitle: 'E_Espinal — Biodiversidad',
                interactive: false,
                title: '<img src="styles/legend/E_EspinalBiodiversidad_12.png" /> E_Espinal — Biodiversidad'
            });
var format_E_Espinalreas_naturales_protegidas_13 = new ol.format.GeoJSON();
var features_E_Espinalreas_naturales_protegidas_13 = format_E_Espinalreas_naturales_protegidas_13.readFeatures(json_E_Espinalreas_naturales_protegidas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_Espinalreas_naturales_protegidas_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_Espinalreas_naturales_protegidas_13.addFeatures(features_E_Espinalreas_naturales_protegidas_13);
var lyr_E_Espinalreas_naturales_protegidas_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_Espinalreas_naturales_protegidas_13, 
                style: style_E_Espinalreas_naturales_protegidas_13,
                popuplayertitle: 'E_Espinal — Áreas_naturales_protegidas',
                interactive: false,
                title: '<img src="styles/legend/E_Espinalreas_naturales_protegidas_13.png" /> E_Espinal — Áreas_naturales_protegidas'
            });
var format_E_EspinalCursos_de_agua_14 = new ol.format.GeoJSON();
var features_E_EspinalCursos_de_agua_14 = format_E_EspinalCursos_de_agua_14.readFeatures(json_E_EspinalCursos_de_agua_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_EspinalCursos_de_agua_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_EspinalCursos_de_agua_14.addFeatures(features_E_EspinalCursos_de_agua_14);
var lyr_E_EspinalCursos_de_agua_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_EspinalCursos_de_agua_14, 
                style: style_E_EspinalCursos_de_agua_14,
                popuplayertitle: 'E_Espinal — Cursos_de_agua',
                interactive: false,
                title: '<img src="styles/legend/E_EspinalCursos_de_agua_14.png" /> E_Espinal — Cursos_de_agua'
            });
var format_E_EspinalRed_vial_nacional_15 = new ol.format.GeoJSON();
var features_E_EspinalRed_vial_nacional_15 = format_E_EspinalRed_vial_nacional_15.readFeatures(json_E_EspinalRed_vial_nacional_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_EspinalRed_vial_nacional_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_EspinalRed_vial_nacional_15.addFeatures(features_E_EspinalRed_vial_nacional_15);
var lyr_E_EspinalRed_vial_nacional_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_EspinalRed_vial_nacional_15, 
                style: style_E_EspinalRed_vial_nacional_15,
                popuplayertitle: 'E_Espinal — Red_vial_nacional',
                interactive: false,
                title: '<img src="styles/legend/E_EspinalRed_vial_nacional_15.png" /> E_Espinal — Red_vial_nacional'
            });
var format_E_EspinalRed_vial_provincial_16 = new ol.format.GeoJSON();
var features_E_EspinalRed_vial_provincial_16 = format_E_EspinalRed_vial_provincial_16.readFeatures(json_E_EspinalRed_vial_provincial_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_EspinalRed_vial_provincial_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_EspinalRed_vial_provincial_16.addFeatures(features_E_EspinalRed_vial_provincial_16);
var lyr_E_EspinalRed_vial_provincial_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_EspinalRed_vial_provincial_16, 
                style: style_E_EspinalRed_vial_provincial_16,
                popuplayertitle: 'E_Espinal — Red_vial_provincial',
                interactive: false,
                title: '<img src="styles/legend/E_EspinalRed_vial_provincial_16.png" /> E_Espinal — Red_vial_provincial'
            });
var format_E_EspinalCortinas_forestales_17 = new ol.format.GeoJSON();
var features_E_EspinalCortinas_forestales_17 = format_E_EspinalCortinas_forestales_17.readFeatures(json_E_EspinalCortinas_forestales_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_EspinalCortinas_forestales_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_EspinalCortinas_forestales_17.addFeatures(features_E_EspinalCortinas_forestales_17);
var lyr_E_EspinalCortinas_forestales_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_EspinalCortinas_forestales_17, 
                style: style_E_EspinalCortinas_forestales_17,
                popuplayertitle: 'E_Espinal — Cortinas_forestales',
                interactive: false,
                title: '<img src="styles/legend/E_EspinalCortinas_forestales_17.png" /> E_Espinal — Cortinas_forestales'
            });
var format_E_EspinalPueblos_originarios_18 = new ol.format.GeoJSON();
var features_E_EspinalPueblos_originarios_18 = format_E_EspinalPueblos_originarios_18.readFeatures(json_E_EspinalPueblos_originarios_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_EspinalPueblos_originarios_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_EspinalPueblos_originarios_18.addFeatures(features_E_EspinalPueblos_originarios_18);
var lyr_E_EspinalPueblos_originarios_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_EspinalPueblos_originarios_18, 
                style: style_E_EspinalPueblos_originarios_18,
                popuplayertitle: 'E_Espinal — Pueblos_originarios',
                interactive: false,
                title: '<img src="styles/legend/E_EspinalPueblos_originarios_18.png" /> E_Espinal — Pueblos_originarios'
            });

lyr_Argenmap_0.setVisible(true);lyr_E_EspinalUnidades_de_vegetacin_1.setVisible(true);lyr_E_EspinalSuelos_2.setVisible(true);lyr_E_EspinalSitios_RAMSAR_3.setVisible(true);lyr_E_EspinalPrdida_de_tierras_forestales_4.setVisible(true);lyr_E_Espinalndice_de_aridez_5.setVisible(true);lyr_E_EspinalIncendios_6.setVisible(true);lyr_E_EspinalHumedales_7.setVisible(true);lyr_E_Espinaljidos_urbanos_8.setVisible(true);lyr_E_EspinalEcorregin_9.setVisible(true);lyr_E_EspinalDimensin_biofsica_10.setVisible(true);lyr_E_EspinalCuencas_hidrogrficas_11.setVisible(true);lyr_E_EspinalBiodiversidad_12.setVisible(true);lyr_E_Espinalreas_naturales_protegidas_13.setVisible(true);lyr_E_EspinalCursos_de_agua_14.setVisible(true);lyr_E_EspinalRed_vial_nacional_15.setVisible(true);lyr_E_EspinalRed_vial_provincial_16.setVisible(true);lyr_E_EspinalCortinas_forestales_17.setVisible(true);lyr_E_EspinalPueblos_originarios_18.setVisible(true);
var layersList = [lyr_Argenmap_0,lyr_E_EspinalUnidades_de_vegetacin_1,lyr_E_EspinalSuelos_2,lyr_E_EspinalSitios_RAMSAR_3,lyr_E_EspinalPrdida_de_tierras_forestales_4,lyr_E_Espinalndice_de_aridez_5,lyr_E_EspinalIncendios_6,lyr_E_EspinalHumedales_7,lyr_E_Espinaljidos_urbanos_8,lyr_E_EspinalEcorregin_9,lyr_E_EspinalDimensin_biofsica_10,lyr_E_EspinalCuencas_hidrogrficas_11,lyr_E_EspinalBiodiversidad_12,lyr_E_Espinalreas_naturales_protegidas_13,lyr_E_EspinalCursos_de_agua_14,lyr_E_EspinalRed_vial_nacional_15,lyr_E_EspinalRed_vial_provincial_16,lyr_E_EspinalCortinas_forestales_17,lyr_E_EspinalPueblos_originarios_18];
lyr_E_EspinalUnidades_de_vegetacin_1.set('fieldAliases', {'CODIGO': 'CODIGO', 'REGION': 'REGION', 'DOMINIO': 'DOMINIO', 'UNID_FITOG': 'UNID_FITOG', 'NOMFISONOM': 'NOMFISONOM', 'NOMVULGAR': 'NOMVULGAR', 'SUP_HA': 'SUP_HA', 'X': 'X', 'Y': 'Y', 'ROTATION': 'ROTATION', });
lyr_E_EspinalSuelos_2.set('fieldAliases', {'provincia': 'provincia', 'new_ncart': 'new_ncart', 'simbc': 'simbc', 'tipo_uc': 'tipo_uc', 'limit_ppal': 'limit_ppal', 'limit_secu': 'limit_secu', 'limit_terc': 'limit_terc', 'ind_prod': 'ind_prod', 'porc_sue1': 'porc_sue1', 'posi_sue1': 'posi_sue1', 'orden_sue1': 'orden_sue1', 'ggrup_sue1': 'ggrup_sue1', 'sgrup_sue1': 'sgrup_sue1', 'text_sups1': 'text_sups1', 'text_bs1': 'text_bs1', 'drenaje_s1': 'drenaje_s1', 'profund_s1': 'profund_s1', 'alcalin_s1': 'alcalin_s1', 'porc_pens1': 'porc_pens1', 'erhidr_s1': 'erhidr_s1', 'ereoli_s1': 'ereoli_s1', 'rocos_s1': 'rocos_s1', 'anegab_s1': 'anegab_s1', 'porc_sue2': 'porc_sue2', 'posi_sue2': 'posi_sue2', 'orden_sue2': 'orden_sue2', 'ggrup_sue2': 'ggrup_sue2', 'sgrup_sue2': 'sgrup_sue2', 'porc_sue3': 'porc_sue3', 'posi_sue3': 'posi_sue3', 'orden_sue3': 'orden_sue3', 'ggrup_sue3': 'ggrup_sue3', 'sgrup_sue3': 'sgrup_sue3', 'ogc_fid': 'ogc_fid', });
lyr_E_EspinalSitios_RAMSAR_3.set('fieldAliases', {'gna': 'gna', 'nam': 'nam', 'creacion': 'creacion', 'provincia': 'provincia', 'area_ha': 'area_ha', });
lyr_E_EspinalPrdida_de_tierras_forestales_4.set('fieldAliases', {'Id': 'Id', 'OBSERVAC': 'OBSERVAC', 'ANIO': 'ANIO', 'ESTILO': 'ESTILO', });
lyr_E_Espinalndice_de_aridez_5.set('fieldAliases', {'fid': 'fid', 'IA_ID': 'IA_ID', 'IA_Rangos': 'IA_Rangos', 'IA_ClaClim': 'IA_ClaClim', 'IA_UNEP': 'IA_UNEP', });
lyr_E_EspinalIncendios_6.set('fieldAliases', {'fid': 'fid', 'prov': 'prov', 'nomprov': 'nomprov', '2020': '2020', '2021': '2021', '2022': '2022', '2023': '2023', '2017': '2017', '2018': '2018', '2019': '2019', });
lyr_E_EspinalHumedales_7.set('fieldAliases', {'region_num': 'region_num', 'region_nom': 'region_nom', 'region_sub': 'region_sub', });
lyr_E_Espinaljidos_urbanos_8.set('fieldAliases', {'Objeto': 'Objeto', 'FNA': 'FNA', 'GNA': 'GNA', 'NAm': 'NAm', 'SAG': 'SAG', });
lyr_E_EspinalEcorregin_9.set('fieldAliases', {'ecorregion': 'ecorregion', 'hectareas': 'hectareas', });
lyr_E_EspinalDimensin_biofsica_10.set('fieldAliases', {'clase': 'clase', });
lyr_E_EspinalCuencas_hidrogrficas_11.set('fieldAliases', {'area': 'area', 'perimeter': 'perimeter', 'cuencas_': 'cuencas_', 'cuencas_id': 'cuencas_id', 'cuen_cod': 'cuen_cod', 'nombre': 'nombre', 'provincia': 'provincia', 'numero': 'numero', 'sistema': 'sistema', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'sistemas': 'sistemas', 'sistemas_l': 'sistemas_l', 'cuencas_la': 'cuencas_la', });
lyr_E_EspinalBiodiversidad_12.set('fieldAliases', {'clase': 'clase', });
lyr_E_Espinalreas_naturales_protegidas_13.set('fieldAliases', {'name': 'name', 'desig': 'desig', 'desig_type': 'desig_type', 'iucn_cat': 'iucn_cat', 'rep_m_area': 'rep_m_area', 'gis_m_area': 'gis_m_area', 'rep_area': 'rep_area', 'gis_area': 'gis_area', 'status_yr': 'status_yr', 'sub_loc': 'sub_loc', });
lyr_E_EspinalCursos_de_agua_14.set('fieldAliases', {'UNION': 'UNION', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'REGIMEN': 'REGIMEN', 'NAVEGABILI': 'NAVEGABILI', 'PROVINCIA': 'PROVINCIA', 'PAIS': 'PAIS', 'OBSERVACIO': 'OBSERVACIO', 'HOJA': 'HOJA', 'FUENTE': 'FUENTE', });
lyr_E_EspinalRed_vial_nacional_15.set('fieldAliases', {'gid': 'gid', 'rtn': 'rtn', 'typ': 'typ', 'rst': 'rst', 'hct': 'hct', 'fdc': 'fdc', 'sag': 'sag', });
lyr_E_EspinalRed_vial_provincial_16.set('fieldAliases', {'gid': 'gid', 'rtn': 'rtn', 'typ': 'typ', 'rst': 'rst', 'hct': 'hct', 'fdc': 'fdc', 'sag': 'sag', });
lyr_E_EspinalCortinas_forestales_17.set('fieldAliases', {'genero': 'genero', 'longitud': 'longitud', });
lyr_E_EspinalPueblos_originarios_18.set('fieldAliases', {'comunidad': 'comunidad', 'pueblo': 'pueblo', });
lyr_E_EspinalUnidades_de_vegetacin_1.set('fieldImages', {'CODIGO': '', 'REGION': '', 'DOMINIO': '', 'UNID_FITOG': '', 'NOMFISONOM': '', 'NOMVULGAR': '', 'SUP_HA': '', 'X': '', 'Y': '', 'ROTATION': '', });
lyr_E_EspinalSuelos_2.set('fieldImages', {'provincia': '', 'new_ncart': '', 'simbc': '', 'tipo_uc': '', 'limit_ppal': '', 'limit_secu': '', 'limit_terc': '', 'ind_prod': '', 'porc_sue1': '', 'posi_sue1': '', 'orden_sue1': '', 'ggrup_sue1': '', 'sgrup_sue1': '', 'text_sups1': '', 'text_bs1': '', 'drenaje_s1': '', 'profund_s1': '', 'alcalin_s1': '', 'porc_pens1': '', 'erhidr_s1': '', 'ereoli_s1': '', 'rocos_s1': '', 'anegab_s1': '', 'porc_sue2': '', 'posi_sue2': '', 'orden_sue2': '', 'ggrup_sue2': '', 'sgrup_sue2': '', 'porc_sue3': '', 'posi_sue3': '', 'orden_sue3': '', 'ggrup_sue3': '', 'sgrup_sue3': '', 'ogc_fid': '', });
lyr_E_EspinalSitios_RAMSAR_3.set('fieldImages', {'gna': '', 'nam': '', 'creacion': '', 'provincia': '', 'area_ha': '', });
lyr_E_EspinalPrdida_de_tierras_forestales_4.set('fieldImages', {'Id': '', 'OBSERVAC': '', 'ANIO': '', 'ESTILO': '', });
lyr_E_Espinalndice_de_aridez_5.set('fieldImages', {'fid': '', 'IA_ID': '', 'IA_Rangos': '', 'IA_ClaClim': '', 'IA_UNEP': '', });
lyr_E_EspinalIncendios_6.set('fieldImages', {'fid': '', 'prov': '', 'nomprov': '', '2020': '', '2021': '', '2022': '', '2023': '', '2017': '', '2018': '', '2019': '', });
lyr_E_EspinalHumedales_7.set('fieldImages', {'region_num': '', 'region_nom': '', 'region_sub': '', });
lyr_E_Espinaljidos_urbanos_8.set('fieldImages', {'Objeto': '', 'FNA': '', 'GNA': '', 'NAm': '', 'SAG': '', });
lyr_E_EspinalEcorregin_9.set('fieldImages', {'ecorregion': '', 'hectareas': '', });
lyr_E_EspinalDimensin_biofsica_10.set('fieldImages', {'clase': '', });
lyr_E_EspinalCuencas_hidrogrficas_11.set('fieldImages', {'area': '', 'perimeter': '', 'cuencas_': '', 'cuencas_id': '', 'cuen_cod': '', 'nombre': '', 'provincia': '', 'numero': '', 'sistema': '', 'shape_leng': '', 'shape_area': '', 'sistemas': '', 'sistemas_l': '', 'cuencas_la': '', });
lyr_E_EspinalBiodiversidad_12.set('fieldImages', {'clase': '', });
lyr_E_Espinalreas_naturales_protegidas_13.set('fieldImages', {'name': '', 'desig': '', 'desig_type': '', 'iucn_cat': '', 'rep_m_area': '', 'gis_m_area': '', 'rep_area': '', 'gis_area': '', 'status_yr': '', 'sub_loc': '', });
lyr_E_EspinalCursos_de_agua_14.set('fieldImages', {'UNION': '', 'TIPO': '', 'NOMBRE': '', 'REGIMEN': '', 'NAVEGABILI': '', 'PROVINCIA': '', 'PAIS': '', 'OBSERVACIO': '', 'HOJA': '', 'FUENTE': '', });
lyr_E_EspinalRed_vial_nacional_15.set('fieldImages', {'gid': '', 'rtn': '', 'typ': '', 'rst': '', 'hct': '', 'fdc': '', 'sag': '', });
lyr_E_EspinalRed_vial_provincial_16.set('fieldImages', {'gid': '', 'rtn': '', 'typ': '', 'rst': '', 'hct': '', 'fdc': '', 'sag': '', });
lyr_E_EspinalCortinas_forestales_17.set('fieldImages', {'genero': '', 'longitud': '', });
lyr_E_EspinalPueblos_originarios_18.set('fieldImages', {'comunidad': '', 'pueblo': '', });
lyr_E_EspinalUnidades_de_vegetacin_1.set('fieldLabels', {'CODIGO': 'inline label - visible with data', 'REGION': 'no label', 'DOMINIO': 'no label', 'UNID_FITOG': 'no label', 'NOMFISONOM': 'no label', 'NOMVULGAR': 'no label', 'SUP_HA': 'no label', 'X': 'no label', 'Y': 'no label', 'ROTATION': 'no label', });
lyr_E_EspinalSuelos_2.set('fieldLabels', {'provincia': 'inline label - always visible', 'new_ncart': 'no label', 'simbc': 'no label', 'tipo_uc': 'no label', 'limit_ppal': 'no label', 'limit_secu': 'no label', 'limit_terc': 'no label', 'ind_prod': 'no label', 'porc_sue1': 'no label', 'posi_sue1': 'no label', 'orden_sue1': 'no label', 'ggrup_sue1': 'no label', 'sgrup_sue1': 'no label', 'text_sups1': 'no label', 'text_bs1': 'no label', 'drenaje_s1': 'no label', 'profund_s1': 'no label', 'alcalin_s1': 'no label', 'porc_pens1': 'no label', 'erhidr_s1': 'no label', 'ereoli_s1': 'no label', 'rocos_s1': 'no label', 'anegab_s1': 'no label', 'porc_sue2': 'no label', 'posi_sue2': 'no label', 'orden_sue2': 'no label', 'ggrup_sue2': 'no label', 'sgrup_sue2': 'no label', 'porc_sue3': 'no label', 'posi_sue3': 'no label', 'orden_sue3': 'no label', 'ggrup_sue3': 'no label', 'sgrup_sue3': 'no label', 'ogc_fid': 'no label', });
lyr_E_EspinalSitios_RAMSAR_3.set('fieldLabels', {'gna': 'no label', 'nam': 'inline label - visible with data', 'creacion': 'no label', 'provincia': 'no label', 'area_ha': 'no label', });
lyr_E_EspinalPrdida_de_tierras_forestales_4.set('fieldLabels', {'Id': 'inline label - always visible', 'OBSERVAC': 'no label', 'ANIO': 'no label', 'ESTILO': 'no label', });
lyr_E_Espinalndice_de_aridez_5.set('fieldLabels', {'fid': 'no label', 'IA_ID': 'no label', 'IA_Rangos': 'inline label - visible with data', 'IA_ClaClim': 'no label', 'IA_UNEP': 'no label', });
lyr_E_EspinalIncendios_6.set('fieldLabels', {'fid': 'no label', 'prov': 'inline label - always visible', 'nomprov': 'no label', '2020': 'no label', '2021': 'no label', '2022': 'no label', '2023': 'no label', '2017': 'no label', '2018': 'no label', '2019': 'no label', });
lyr_E_EspinalHumedales_7.set('fieldLabels', {'region_num': 'inline label - always visible', 'region_nom': 'no label', 'region_sub': 'no label', });
lyr_E_Espinaljidos_urbanos_8.set('fieldLabels', {'Objeto': 'no label', 'FNA': 'no label', 'GNA': 'no label', 'NAm': 'no label', 'SAG': 'no label', });
lyr_E_EspinalEcorregin_9.set('fieldLabels', {'ecorregion': 'no label', 'hectareas': 'no label', });
lyr_E_EspinalDimensin_biofsica_10.set('fieldLabels', {'clase': 'no label', });
lyr_E_EspinalCuencas_hidrogrficas_11.set('fieldLabels', {'area': 'no label', 'perimeter': 'inline label - always visible', 'cuencas_': 'no label', 'cuencas_id': 'no label', 'cuen_cod': 'no label', 'nombre': 'no label', 'provincia': 'no label', 'numero': 'no label', 'sistema': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'sistemas': 'no label', 'sistemas_l': 'no label', 'cuencas_la': 'no label', });
lyr_E_EspinalBiodiversidad_12.set('fieldLabels', {'clase': 'no label', });
lyr_E_Espinalreas_naturales_protegidas_13.set('fieldLabels', {'name': 'no label', 'desig': 'inline label - visible with data', 'desig_type': 'no label', 'iucn_cat': 'no label', 'rep_m_area': 'no label', 'gis_m_area': 'no label', 'rep_area': 'no label', 'gis_area': 'no label', 'status_yr': 'no label', 'sub_loc': 'no label', });
lyr_E_EspinalCursos_de_agua_14.set('fieldLabels', {'UNION': 'no label', 'TIPO': 'inline label - always visible', 'NOMBRE': 'no label', 'REGIMEN': 'no label', 'NAVEGABILI': 'no label', 'PROVINCIA': 'no label', 'PAIS': 'no label', 'OBSERVACIO': 'no label', 'HOJA': 'no label', 'FUENTE': 'no label', });
lyr_E_EspinalRed_vial_nacional_15.set('fieldLabels', {'gid': 'no label', 'rtn': 'no label', 'typ': 'no label', 'rst': 'no label', 'hct': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_E_EspinalRed_vial_provincial_16.set('fieldLabels', {'gid': 'no label', 'rtn': 'no label', 'typ': 'no label', 'rst': 'no label', 'hct': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_E_EspinalCortinas_forestales_17.set('fieldLabels', {'genero': 'no label', 'longitud': 'no label', });
lyr_E_EspinalPueblos_originarios_18.set('fieldLabels', {'comunidad': 'no label', 'pueblo': 'no label', });
lyr_E_EspinalPueblos_originarios_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});