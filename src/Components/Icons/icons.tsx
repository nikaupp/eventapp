import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEnvelope,
	faEnvelopeOpen,
	faFilePdf,
	faFileVideo,
	faCalendarAlt,
	faStar
} from '@fortawesome/free-regular-svg-icons';

import {
	faBan,
	faPaw,
	faLock,
	faLockOpen,
	faMinus,
	faPlus,
	faDownload,
	faQuestion,
	faQuestionCircle,
	faArrowDown,
	faArrowUp,
	faArrowRight,
	faArrowLeft,
	faExclamation,
	faFile,
	faAddressBook,
	faAddressCard,
	faFileImage,
	faFileExcel,
	faFileWord,
	faFilePowerpoint,
	faFileAudio,
	faSave,
	faTimes,
	faEllipsisH,
	faEllipsisV,
	faBars,
	faBarcode,
	faFileArchive,
	faAngleDown,
	faAngleUp,
	faAngleRight,
	faAngleLeft,
	faSortDown,
	faSortUp,
	faCaretDown,
	faCaretUp,
	faUser,
	faUniversity,
	faUsers,
	faChalkboardTeacher,
	faPaperclip,
	faCheck,
	faDollarSign,
	faMoneyBill,
	faPrint,
	faTimesCircle,
	faCheckCircle,
	faTrashAlt,
	faSearch,
	faRedo,
	faUndo,
	faPen,
	faPenAlt,
	faShoppingCart,
	faEdit,
	faCog,
	faMobileAlt,
	faCopy,
	faPaste,
	faIgloo,
	faEye,
	faHotel,
	faBox,
	faClock,
	faEyeSlash,
	faGlobe,
	faExclamationTriangle,
	faHome,
	faShare,
	faNewspaper,
	faComment,
	faComments,
	faCommentDots,
	faInfo,
	faInfoCircle,
	faShareAlt,
	faPaperPlane,
	faSpinner,
	faMapMarkerAlt,
	faList,
	faStar as faStarFull,
	faSun,
	faMoon,
	faPowerOff,
	faClipboardList,
	faReceipt,
	faDesktop,
	faSignOutAlt,
	faImage,
	faPhotoVideo
} from '@fortawesome/free-solid-svg-icons';

export const Icons = {
	banned: <FontAwesomeIcon icon={faBan} />,
	media: <FontAwesomeIcon icon={faPhotoVideo} />,
	image: <FontAwesomeIcon icon={faImage} />,
	sign_out: <FontAwesomeIcon icon={faSignOutAlt} />,
	computer: <FontAwesomeIcon icon={faDesktop} />,
	moon: <FontAwesomeIcon icon={faMoon} />,
	sun: <FontAwesomeIcon icon={faSun} />,
	power_off: <FontAwesomeIcon icon={faPowerOff} />,
	spinner_static: <FontAwesomeIcon icon={faSpinner} />,
	spinner: <FontAwesomeIcon icon={faSpinner} spin={true} />,
	share_alt: <FontAwesomeIcon icon={faShareAlt} />,
	paperplane: <FontAwesomeIcon icon={faPaperPlane} />,
	map_marker: <FontAwesomeIcon icon={faMapMarkerAlt} />,
	list: <FontAwesomeIcon icon={faList} />,
	clipboard_list: <FontAwesomeIcon icon={faClipboardList} />,
	home: <FontAwesomeIcon icon={faHome} />,
	star: <FontAwesomeIcon icon={faStar} />,
	star_filled: <FontAwesomeIcon icon={faStarFull} />,
	newspaper: <FontAwesomeIcon icon={faNewspaper} />,
	share: <FontAwesomeIcon icon={faShare} />,
	twitter: <FontAwesomeIcon icon={faShare} />,
	comments: <FontAwesomeIcon icon={faComments} />,
	comment: <FontAwesomeIcon icon={faComment} />,
	comments_dots: <FontAwesomeIcon icon={faCommentDots} />,
	info: <FontAwesomeIcon icon={faInfo} />,
	info_circle: <FontAwesomeIcon icon={faInfoCircle} />,
	receipt: <FontAwesomeIcon icon={faReceipt} />,
	lockopen: <FontAwesomeIcon icon={faLockOpen} />,
	lock: <FontAwesomeIcon icon={faLock} />,
	paw: <FontAwesomeIcon icon={faPaw} />,
	address_book: <FontAwesomeIcon icon={faAddressBook} />,
	address_card: <FontAwesomeIcon icon={faAddressCard} />,
	ellipses_H: <FontAwesomeIcon icon={faEllipsisH} />,
	ellipses_V: <FontAwesomeIcon icon={faEllipsisV} />,
	barcode: <FontAwesomeIcon icon={faBarcode} />,
	bars: <FontAwesomeIcon icon={faBars} />,
	igloo: <FontAwesomeIcon icon={faIgloo} />,
	shopping_cart: <FontAwesomeIcon icon={faShoppingCart} />,
	hotel: <FontAwesomeIcon icon={faHotel} />,
	plus: <FontAwesomeIcon icon={faPlus} />,
	minus: <FontAwesomeIcon icon={faMinus} />,
	trashcan: <FontAwesomeIcon icon={faTrashAlt} />,
	download: <FontAwesomeIcon icon={faDownload} />,
	questionmark: <FontAwesomeIcon icon={faQuestionCircle} />,
	question: <FontAwesomeIcon icon={faQuestion} />,
	exlamation: <FontAwesomeIcon icon={faExclamation} />,
	exlamation_triangle: <FontAwesomeIcon icon={faExclamationTriangle} />,
	file: <FontAwesomeIcon icon={faFile} />,
	file_text: <FontAwesomeIcon icon={faFile} />,
	file_image: <FontAwesomeIcon icon={faFileImage} />,
	file_pdf: <FontAwesomeIcon icon={faFilePdf} />,
	file_excel: <FontAwesomeIcon icon={faFileExcel} />,
	file_powerpoint: <FontAwesomeIcon icon={faFilePowerpoint} />,
	file_word: <FontAwesomeIcon icon={faFileWord} />,
	file_video: <FontAwesomeIcon icon={faFileVideo} />,
	file_audio: <FontAwesomeIcon icon={faFileAudio} />,
	file_archive: <FontAwesomeIcon icon={faFileArchive} />,
	save: <FontAwesomeIcon icon={faSave} />,
	close: <FontAwesomeIcon icon={faTimes} />,
	arrowLeft: <FontAwesomeIcon icon={faArrowLeft} />,
	arrowRight: <FontAwesomeIcon icon={faArrowRight} />,
	arrowUp: <FontAwesomeIcon icon={faArrowUp} />,
	arrowDown: <FontAwesomeIcon icon={faArrowDown} />,
	angle_up: <FontAwesomeIcon icon={faAngleUp} />,
	angle_down: <FontAwesomeIcon icon={faAngleDown} />,
	angle_right: <FontAwesomeIcon icon={faAngleRight} />,
	angle_right_rotated: <FontAwesomeIcon icon={faAngleRight} rotation={90} />,
	angle_left: <FontAwesomeIcon icon={faAngleLeft} />,
	sortUp: <FontAwesomeIcon icon={faSortUp} />,
	sortDown: <FontAwesomeIcon icon={faSortDown} />,
	caretUp: <FontAwesomeIcon icon={faCaretUp} />,
	caretDown: <FontAwesomeIcon icon={faCaretDown} />,
	users: <FontAwesomeIcon icon={faUsers} />,
	user: <FontAwesomeIcon icon={faUser} />,
	teacher: <FontAwesomeIcon icon={faChalkboardTeacher} />,
	globe: <FontAwesomeIcon icon={faGlobe} />,
	check: <FontAwesomeIcon icon={faCheck} />,
	calendar: <FontAwesomeIcon icon={faCalendarAlt} />,
	dollar: <FontAwesomeIcon icon={faDollarSign} />,
	money: <FontAwesomeIcon icon={faMoneyBill} />,
	print: <FontAwesomeIcon icon={faPrint} />,
	check_circle: <FontAwesomeIcon icon={faCheckCircle} />,
	times_circle: <FontAwesomeIcon icon={faTimesCircle} />,
	search: <FontAwesomeIcon icon={faSearch} />,
	redo: <FontAwesomeIcon icon={faRedo} />,
	undo: <FontAwesomeIcon icon={faUndo} />,
	pen: <FontAwesomeIcon icon={faPen} />,
	pen_alt: <FontAwesomeIcon icon={faPenAlt} />,
	edit: <FontAwesomeIcon icon={faEdit} />,
	envelope: <FontAwesomeIcon icon={faEnvelope} />,
	envelope_open: <FontAwesomeIcon icon={faEnvelopeOpen} />,
	mobile: <FontAwesomeIcon icon={faMobileAlt} />,
	WIP: <FontAwesomeIcon icon={faCog} spin={true} />,
	cog: <FontAwesomeIcon icon={faCog} />,
	eye: <FontAwesomeIcon icon={faEye} />,
	eye_slash: <FontAwesomeIcon icon={faEyeSlash} />,
	box: <FontAwesomeIcon icon={faBox} />,
	university: <FontAwesomeIcon icon={faUniversity} />,
	clock: <FontAwesomeIcon icon={faClock} />,
	paperclip: <FontAwesomeIcon icon={faPaperclip} />,
	copy: <FontAwesomeIcon icon={faCopy} />,
	paste: <FontAwesomeIcon icon={faPaste} />
};

export default Icons;
