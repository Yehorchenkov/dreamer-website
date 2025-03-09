import STUBAlogo from '$lib/images/logos/STU-anfnv.png?enhanced';
import KUlogo from '$lib/images/logos/logo-ALK.png?enhanced';
import SETUlogo from '$lib/images/logos/RGB_SETU.png?enhanced';
import UPBlogo from '$lib/images/logos/PB_logo_EN.png?enhanced';
import ZSEMlogo from '$lib/images/logos/ZSEM-logo2.png?enhanced';
import KNUCAlogo from '$lib/images/logos/KNUCA-logo.png?enhanced';
import TSNUKlogo from '$lib/images/logos/Logo_KNU.png?enhanced';

export const partnersData = [
    {
        shortName: 'STUBA',
        name: 'Slovak University of Technology in Bratislava',
        imgComp: STUBAlogo,
        imgAlt: 'Slovak University of Technology in Bratislava logo',
        ref: 'https://priestoroveplanovanie.sk/index.php/dreamer-erasmus/',
        country: 'SK',
        countryName: 'Slovakia',
    },
    {
        shortName: 'KNUCA',
        name: 'Kyiv National University of Construction and Architecture',
        imgComp: KNUCAlogo,
        imgAlt: 'Kyiv National University of Construction and Architecture logo',
        ref: 'https://eng.knuba.edu.ua/',
        country: 'UA',
        countryName: 'Ukraine',
    },
    {
        shortName: 'KU',
        name: 'Akademia Leona Kozminskiego',
        imgComp: KUlogo,
        imgAlt: 'Akademia Leona Kozminskiego logo',
        ref: 'https://www.kozminski.edu.pl/en/dreamer-development-and-reconstruction-empowerment-through-advanced-project-management-education-and-research',
        country: 'PL',
        countryName: 'Poland',
    },
    {
        shortName: 'UPB',
        name: 'Universitatea Nationala de Stiinta si Tehnologie POLITEHNICA Bucuresti',
        imgComp: UPBlogo,
        imgAlt: 'Universitatea Nationala de Stiinta si Tehnologie POLITEHNICA Bucuresti logo',
        ref: 'https://dreamer.tcm.pub.ro/',
        country: 'RO',
        countryName: 'Romania',
    },
    {
        shortName: 'SETU',
        name: 'South East Technological University',
        imgComp: SETUlogo,
        imgAlt: 'South East Technological University logo',
        ref: 'https://sabre-centre.ie/projects/dreamer/',
        country: 'IE',
        countryName: 'Ireland',
    },
    {
        shortName: 'ZSEM',
        name: 'Zagreb School of Economics and Management',
        imgComp: ZSEMlogo,
        imgAlt: 'Zagreb School of Economics and Management logo',
        ref: 'https://www.zsem.hr/en/',
        country: 'HR',
        countryName: 'Croatia',
    },
    {
        shortName: 'TSNUK',
        name: 'Taras Shevchenko National University of Kyiv',
        imgComp: TSNUKlogo,
        imgAlt: 'Taras Shevchenko National University of Kyiv logo',
        ref: 'https://www.univ.kiev.ua/en/',
        country: 'UA',
        countryName: 'Ukraine',
    }
];

// export const partnersDataSorted = partnersData.sort((a, b) => a.sortName.localeCompare(b.sortName));
