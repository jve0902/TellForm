'use strict';

angular.module('forms').config(['$translateProvider', function ($translateProvider) {

  	$translateProvider.translations('fr', {
    	// Configurer la vue de l'onglet Formulaire
		ADVANCED_SETTINGS: 'Paramètres avancés',
		FORM_NAME: "Nom du formulaire",
		FORM_STATUS: 'Statut du formulaire',
		PUBLIC_1: 'Public',
		PRIVATE_1: "Privé",
		GA_TRACKING_CODE: "Code de suivi Google Analytics",
		DISPLAY_FOOTER: "Afficher le pied de formulaire?",
		SAVE_CHANGES: 'Enregistrer les modifications',
		CANCEL_1: 'Annuler',
		DISPLAY_START_PAGE: "Afficher la page de démarrage?",
		DISPLAY_END_PAGE: "Afficher la page de fin personnalisée?",

		// Afficher les formulaires
		CREATE_A_NEW_FORM: "Créer un nouveau formulaire",
		CREATE_FORM: "Créer un formulaire",
		CREATED_ON: 'Créé le',
		MY_FORMS: 'Mes formes',
		NAME_1: "Nom",
		LANGUE: 'Langue',
		FORM_PAUSED: 'Formulaire en pause',

		// Modifier le modal de champ
		EDIT_FIELD: "Modifier ce champ",
		SAVE_FIELD: 'Enregistrer',
		ON_1: 'ON',
		OFF_1: "OFF",
		REQUIRED_FIELD: "Obligatoire",
		LOGIC_JUMP: 'Saut logique',
		SHOW_BUTTONS: 'Boutons supplémentaires',
		SAVE_START_PAGE: "Enregistrer",

		// Affichage du formulaire d'administration
		ARE_YOU_SURE: 'Es-tu ABSOLUMENT sûr?',
		READ_WARNING: "De mauvaises choses inattendues se produiront si vous ne lisez pas ceci!",
		DELETE_WARNING1: 'Cette action NE PEUT PAS être annulée. Cela supprimera définitivement le "',
		DELETE_WARNING2: '" forme et supprime toutes les soumissions de formulaire associées. ',
		DELETE_CONFIRM: "Veuillez taper le nom du formulaire pour confirmer.",
		I_UNDERSTAND: 'Je comprends les conséquences, efface ce formulaire.',
		DELETE_FORM_SM: 'Supprimer',
		DELETE_FORM_MD: "Supprimer le formulaire",
		DELETE_1: "Supprimer",
		FORM_1: 'Formulaire',
		VIEW_1: "Afficher",
		LIVE_1: "Live",
		PREVIEW_1: 'Aperçu',
		COPY_1: "Copier",
		COPY_AND_PASTE: "Copiez et collez ceci pour ajouter votre TellForm à votre site Web",
		CHANGE_WIDTH_AND_HEIGHT: "Changez les valeurs de largeur et de hauteur pour mieux vous convenir",
		POWERED_BY: "Alimenté par",
		TELLFORM_URL: "Votre TellForm est en permanence sur cette URL",

		// Modifier la vue de formulaire
		DISABLED_1: "Désactivé",
		OUI_1: 'OUI',
		NO_1: 'NON',
		ADD_LOGIC_JUMP: 'Ajouter un saut de logique',
		ADD_FIELD_LG: "Cliquez pour ajouter un nouveau champ",
		ADD_FIELD_MD: "Ajouter un nouveau champ",
		ADD_FIELD_SM: "Ajouter un champ",
		EDIT_START_PAGE: "Modifier la page de démarrage",
		EDIT_END_PAGE: "Modifier la page de fin",
		WELCOME_SCREEN: 'Page de démarrage',
		END_SCREEN: 'Fin de page',
		INTRO_TITLE: "Titre",
		INTRO_PARAGRAPH: 'Paragraphe',
		INTRO_BTN: 'Bouton de démarrage',
		TITLE_1: "Titre",
		PARAGRAPHE: 'Paragraphe',
		BTN_TEXT: "Bouton Retour",
		BOUTONS: 'Boutons',
		BUTTON_TEXT: "Texte",
		BUTTON_LINK: "Lien",
		ADD_BUTTON: 'Ajouter un bouton',
		PREVIEW_FIELD: 'Question d\'aperçu',
		QUESTION_TITLE: "Titre",
		QUESTION_DESCRIPTION: 'Description',
		OPTIONS_1: 'Options',
		ADD_OPTION: 'Ajouter une option',
		NUM_OF_STEPS: "Nombre d'étapes",
		CLICK_FIELDS_FOOTER: 'Cliquez sur les champs pour les ajouter ici',
		SHAPE: 'Forme',
		IF_THIS_FIELD: "Si ce champ",
		IS_EQUAL_TO: 'est égal à',
		IS_NOT_EQUAL_TO: 'n\'est pas égal à',
		IS_GREATER_THAN: 'est supérieur à',
		IS_GREATER_OR_EQUAL_THAN: 'est supérieur ou égal à',
		IS_SMALLER_THAN: 'is_smaller_than',
		IS_SMALLER_OR_EQUAL_THAN: 'est plus petit ou égal à',
		CONTAINS_1: 'contient',
		DOES_NOT_CONTAINS: 'ne contient pas',
		ENDS_WITH: "se termine par",
		DOES_NOT_END_WITH: "ne finit pas avec",
		STARTS_WITH: 'commence par',
		DOES_NOT_START_WITH: "ne commence pas par",
		THEN_JUMP_TO: 'alors saute à',

		// Modifier la vue des soumissions
		TOTAL_VIEWS: 'total des visites uniques',
		RESPONSES_1: "réponses",
		COMPLETION_RATE: "taux d'achèvement",
		AVERAGE_TIME_TO_COMPLETE: 'moy. le temps d\'achèvement',

		DESKTOP_AND_LAPTOP: 'Desktops',
		TABLETS_1: 'Tablettes',
		PHONES_1: 'Téléphones',
		OTHER_1: 'Autre',
		UNIQUE_VISITS: 'Visites uniques',

		FIELD_TITLE: 'Titre du champ',
		FIELD_VIEWS: 'Field Views',
		FIELD_DROPOFF: "Achèvement du champ",
		FIELD_RESPONSES: 'Réponses sur le terrain',
		DELETE_SELECTED: 'Supprimer la sélection',
		EXPORT_TO_EXCEL: 'Exporter vers Excel',
		EXPORT_TO_CSV: 'Export to CSV',
		EXPORT_TO_JSON: "Exporter vers JSON",
		PERCENTAGE_COMPLETE: 'Pourcentage terminé',
		TIME_ELAPSED: 'Temps écoulé',
		DEVICE_1: "Device",
		LOCATION_1: "Emplacement",
		IP_ADDRESS: 'Adresse IP',
		DATE_SUBMITTED: 'Date de soumission',

		// Vue de conception
		BACKGROUND_COLOR: "Couleur d'arrière-plan",
		DESIGN_HEADER: "Changez l'apparence de votre formulaire",
		QUESTION_TEXT_COLOR: "Couleur du texte de la question",
		ANSWER_TEXT_COLOR: "Couleur du texte de la réponse",
		BTN_BACKGROUND_COLOR: "Couleur d'arrière-plan du bouton",
		BTN_TEXT_COLOR: "Couleur du texte du bouton",

		// Vue de partage
		EMBED_YOUR_FORM: "Intégrez votre formulaire",
		SHARE_YOUR_FORM: "Partager votre formulaire",

		// Onglets d'administration
		CREATE_TAB: "Créer",
		DESIGN_TAB: 'Design',
		CONFIGURE_TAB: 'Configurer',
		ANALYZE_TAB: "Analyser",
		SHARE_TAB: "Partager",

		// Types de champs
		SHORT_TEXT: "Texte court",
		EMAIL_1: "E-mail",
		MULTIPLE_CHOICE: 'Choix multiple',
		DROPDOWN_1: 'Dropdown',
		DATE_1: 'Date',
		PARAGRAPH_T: "Paragraphe",
		OUI_NON: 'Oui / Non',
		LEGAL_1: 'Légal',
		RATING_1: "Évaluation",
		NUMBERS_1: "Chiffres",
		SIGNATURE_1: 'Signature',
		FILE_UPLOAD: 'Téléchargement de fichier',
		OPTION_SCALE: 'Option Scale',
		PAYMENT_1: 'Paiement',
		STATEMENT_1: 'Déclaration',
		LINK_1: "Lien",

		// Aperçu du formulaire
		FORM_SUCCESS: 'Entrée de formulaire soumise avec succès!',
		REVIEW_1: 'Review',
		BACK_TO_FORM: "Revenir au formulaire",
		EDIT_FORM: "Modifier ce TellForm",
		ADVANCEMENT_1: '{{done}} sur {{total}} a répondu',
		CONTINUE_FORM: "Continuer à se former",
		REQUIRED_1: 'requis',
		COMPLETING_NEEDED: '{{answers_not_completed}} réponse (s) doivent être complétées',
		OPTIONAL_1: 'optionnel',
		ERROR_EMAIL_INVALID: "Veuillez entrer une adresse email valide",
		ERROR_NOT_A_NUMBER: "Veuillez entrer uniquement des numéros valides",
		ERROR_URL_INVALID: "S'il vous plaît une adresse valide",
		OK_1: 'OK',
		ENTER_1: 'appuyez sur ENTRER',
		NEWLINE_1: 'appuyez sur MAJ + ENTRÉE pour créer une nouvelle ligne',
		CONTINUE_1: "Continuer",
		LEGAL_ACCEPT: 'J\'accepte',
		LEGAL_NO_ACCEPT: "Je n'accepte pas",
		SUBMIT_1: "Soumettre",
		UPLOAD_FILE: "Télécharger votre fichier"
  	});
}]);
