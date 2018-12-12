let elementTypes = [
    {
        type: 'noble-gas',
        color: '#0099ff'
    },
    {
        type: 'alkali-metal',
        color: '#612005'
    },
    {
        type: 'alkaline-earth',
        color: '#90f'
    },
    {
        type: 'nonmetal',
        color: '#9bf500'
    },
    {
        type: 'basic-metal',
        color: '#f00'
    },
    {
        type: 'semimetal',
        color: '#f80'
    },
    {
        type: 'transition-metal',
        color: '#ff2462'
    },
    {
        type: 'theoretical',
        color: '#969696'
    },
    {
        type: 'halogen',
        color: '#1ff8ff'
    },
    {
        type: 'actinide',
        color: '#ff00e1'
    },
    {
        type: 'lanthanide',
        color: '#0dc700'
    }
];

function elementPlacement(num) {
    switch (num) {
        case '1':
        case '3':
        case '11':
        case '19':
        case '37':
        case '55':
        case '87':
            columns[0].appendChild(elDiv);
            columns[0].appendChild(modalDiv);
            break;
        case '4':
        case '12':
        case '20':
        case '38':
        case '56':
        case '88':
            columns[1].appendChild(elDiv);
            columns[1].appendChild(modalDiv);
            break;
        case '21':
        case '39':
            columns[2].appendChild(elDiv);
            columns[2].appendChild(modalDiv);
            break;
        case '22':
        case '40':
        case '72':
        case '104':
            columns[3].appendChild(elDiv);
            columns[3].appendChild(modalDiv);
            break;
        case '23':
        case '41':
        case '73':
        case '105':
            columns[4].appendChild(elDiv);
            columns[4].appendChild(modalDiv);
            break;
        case '24':
        case '42':
        case '74':
        case '106':
            columns[5].appendChild(elDiv);
            columns[5].appendChild(modalDiv);
            break;
        case '25':
        case '43':
        case '75':
        case '107':
            columns[6].appendChild(elDiv);
            columns[6].appendChild(modalDiv);
            break;
        case '26':
        case '44':
        case '76':
        case '108':
            columns[7].appendChild(elDiv);
            columns[7].appendChild(modalDiv);
            break;
        case '27':
        case '45':
        case '77':
        case '109':
            columns[8].appendChild(elDiv);
            columns[8].appendChild(modalDiv);
            break;
        case '28':
        case '46':
        case '78':
        case '110':
            columns[9].appendChild(elDiv);
            columns[9].appendChild(modalDiv);
            break;
        case '29':
        case '47':
        case '79':
        case '111':
            columns[10].appendChild(elDiv);
            columns[10].appendChild(modalDiv);
            break;
        case '30':
        case '48':
        case '80':
        case '112':
            columns[11].appendChild(elDiv);
            columns[11].appendChild(modalDiv);
            break;
        case '5':
        case '13':
        case '31':
        case '49':
        case '81':
        case '113':
            columns[12].appendChild(elDiv);
            columns[12].appendChild(modalDiv);
            break;
        case '6':
        case '14':
        case '32':
        case '50':
        case '82':
        case '114':
            columns[13].appendChild(elDiv);
            columns[13].appendChild(modalDiv);
            break;
        case '7':
        case '15':
        case '33':
        case '51':
        case '83':
        case '115':
            columns[14].appendChild(elDiv);
            columns[14].appendChild(modalDiv);
            break;
        case '8':
        case '16':
        case '34':
        case '52':
        case '84':
        case '116':
            columns[15].appendChild(elDiv);
            columns[15].appendChild(modalDiv);
            break;
        case '9':
        case '17':
        case '35':
        case '53':
        case '85':
        case '117':
            columns[16].appendChild(elDiv);
            columns[16].appendChild(modalDiv);
            break;
        case '2':
        case '10':
        case '18':
        case '36':
        case '54':
        case '86':
        case '118':
            columns[17].appendChild(elDiv);
            columns[17].appendChild(modalDiv);
            break;
        case '57':
            columns[2].appendChild(elPlaceholder);
            rows[0].appendChild(elDiv);
            rows[0].appendChild(modalDiv);
            break;
        case '89':
            columns[2].appendChild(elPlaceholder);
            rows[1].appendChild(elDiv);
            rows[1].appendChild(modalDiv);
            break;
        case '58':
        case '59':
        case '60':
        case '61':
        case '62':
        case '63':
        case '64':
        case '65':
        case '66':
        case '67':
        case '68':
        case '69':
        case '70':
        case '71':
            rows[0].appendChild(elDiv);
            rows[0].appendChild(modalDiv);
            break;
        case '90':
        case '91':
        case '92':
        case '93':
        case '94':
        case '95':
        case '96':
        case '97':
        case '98':
        case '99':
        case '100':
        case '101':
        case '102':
        case '103':
            rows[1].appendChild(elDiv);
            rows[1].appendChild(modalDiv);
            break;
    }
}

function elementType(type) {
    switch (type) {
        case 'noble gas':
            elDiv.classList.add('noble-gas');
            break;
        case 'alkali metal':
            elDiv.classList.add('alkali-metal');
            break;
        case 'nonmetal':
            elDiv.classList.add('nonmetal');
            break;
        case 'alkaline earth':
            elDiv.classList.add('alkaline-earth');
            break;
        case 'semimetal':
            elDiv.classList.add('semimetal');
            break;
        case 'halogen':
            elDiv.classList.add('halogen');
            break;
        case 'transition metal':
            elDiv.classList.add('transition-metal');
            break;
        case 'basic metal':
            elDiv.classList.add('basic-metal');
            break;
        case 'theoretical':
            elDiv.classList.add('theoretical');
            break;
        case 'actinide':
            elDiv.classList.add('actinide');
            break;
        case 'lanthanide':
            elDiv.classList.add('lanthanide');
            break;
    }
}

function getWidth() {
        periodicTable.classList.add('flex-center');
        expandedTable.classList.add('flex-center');
}

function displayModal() {
    modal = this.nextSibling;
    modalContent = modal.firstChild;

    for (let i = 0; i < elementTypes.length; i++) {
        if (this.classList.contains(elementTypes[i].type)) {
            modalContent.style.backgroundColor = elementTypes[i].color;
        }
    }
    modal.style.display = 'block';
}

function closeModal(ev) {
    if (ev.target === modal) {
        modal.style.display = 'none';
    }
}