/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    const count = {};
    for(let char of s1) {
        count[char] = ++count[char] || 1;
    }
    let target = {...count};
    let target2 = {...count};
    let j = 0;
    let k = s2.length-1;
    let copy = "";
    let copy2 = ""
    while(j < s2.length) {
        while(count[s2[j]] > 0) {
            copy = copy + s2[j];
            target[s2[j]] -= 1;
            j++;
        }
        if(s1.length === copy.length) {
            console.log(true)
            return true;
        }
        copy = "";
        target = {...count};
        console.log(s2[j])
        s2[j-1] && target[s2[j]] && (s2[j] !== s2[j-1]) ? --j : ++j;
    }
    // while(k >= 0) {
    //     while(target2[s2[k]] > 0) {
    //         copy2 = copy2 + s2[k];
    //         target2[s2[k]] -= 1;
    //         k--;
    //     }
    //     if(s1.length === copy2.length) {
    //         console.log(true)
    //         return true;
    //     }
    //     copy2 = "";
    //     target2 = {...count};
    //     // console.log(s2[k])
    //     s2[k+1] && target2[s2[k]] && (s2[k] !== s2[k+1]) ? ++k : --k;
    // }
    return false;
};


var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false;
    let count = {};
    let total = 0;
    for(let char=0; char < s1.length; char++) {
        count[s1[char]] = ++count[s1[char]] || 1;
        total++;
    }
    let j = 0;
    let copy = {...count};
    let totalCopy = total;
    while(j < s2.length) {
        const start = j;
        while(copy[s2[j]] > 0) {
            copy[s2[j]] -= 1;
            j++;
            totalCopy--;
        }
        if(!totalCopy) {
            console.log(true)
            return true;
        }
        if(j - start > 1) {
            j -=1;
        } else if(start === j) {
            j++;
        }
        copy = {...count};
        totalCopy = total;
    }
    return false;
}

var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false;
    let count = {};
    let remainder = 0;
    for(let char of s1) {
        count[char] = ++count[char] || 1;
        remainder++;
    }
    for(let i=0; i < s1.length; i++) {
        if(count[s2[i]] !== undefined) {
            count[s2[i]] -= 1;
            if(count[s2[i]] >= 0) remainder--;
        }
    }
    let i = 0;
    let j = s1.length-1;
    while(j < s2.length) {
        if(!remainder) {
            console.log("Done", i, j)
            return true;
        }
        j++;
        if(count[s2[j]] !== undefined) {
            count[s2[j]] -= 1;
            if(count[s2[j]] >= 0) remainder--;
        }
        
        if(count[s2[i]] !== undefined) {
            count[s2[i]] += 1;
            if(count[s2[i]] > 0) remainder++;
        }
        i++;
    }
    // console.log(count)
    return false;
}

let s1= "adc"
let s2= "dcda"
s1="abc"
s2="cccccbabbbaaaa"
s1="ab"
s2="eidboaoo"
s1="vxqakfyaqahufxfizupjrkkifjlbfqfeprqrfjvxnubntdtlvz"
s2="oumgfmlrbivgnrvsfslnheghnbhhicbvaddqadwicekguhjairhpqtebqvzyxdfodntxmoqtffgmsomnhndbrffxmuyjvqazwfvugyvmshxignfenmkihorjkshwyuxxkxidpkalqmdnxxmnovhangcwggjwjrletxhelehcipflvqyueptgjxugyipegamjbweqdfeswrjepjjlviuhfikfaojbhrujdfpnenrvajrdplwaevpbzkcdkyhidbgizwofjoxfvnkzhmwvegnfipgmnikljmmcrleffceqsxrxgsjmjmaflnxtigfoeaafsrjaxaqumhatpdeueridyxfjajsjkcrfwkwguclqtrefwevwalmcvoiragprwwnxpwgqoyulsadfhstduevikkkwmofklomdvpdcnxxsotudmkjgakbzopzengbfrvhiikzrsmmurewnnquydhntpqprtyvouatjevvoerbnzunwtdiigohcctulnvpgfbtdjmjsvszphulflmolunohifxsycaiifkngpuycnlihebmhaapureljxlqozydijsbcitfrdjhbdppvhpfjfuxujwfkcezyvhbityajxcccbuyvoluzndgjsyvrbluvagqtuujpsxjcgdtkbhaxsatmellmotdeoxsxjsywuavjqpzjkcpsrowqgogovcouosjhblhdmbkeidafpimjaiypownlcilpahbszmmcwbqmztpdmbqeuizjwdifruojquahdtdukydxgehpourjytveajjvtpiphihkmgqpmnuukpqtjyyqhfsiezugszdbjsseaxxdxomhouvetgcvfeuvwszmhgpkkorubvahxoufpfcukgchdubddpijsolrkvgiizhqefdhvpzvpmuxnwpcaepnpuicgvoxdqfcaabhsxgnorbpkboueplrpztqehrufldndxuenmvynranzqontfihfwvtxmiadbogsawlpmyycaztkyrqxwoxocbtngrmaiyafqqornrknnsmulglzyjnydvwpfefbuwhcocvyczklwywgwergmboqagcsngavorldbpsefoaynkmfqrjzdtbylibwwhhuhfqkoorihjewpcpuxhjnbeiegpplsyrzzyxsnnslvbkslzhwqjzrijdyucnnoshkxbagqdzxwnarwbzivhjpzgvaqrtywqwdetcqtsxviebsnpeflvegyjgxaskwuesfaqdjfdvuklayyekvumbuciranyvymtwshowdxyxbtpuchskraonnwvvvbdehhjdqiluauesssredqoeypadjsahxjqrgxmguppwrydbsiuvhjxyvsseeisbymztpaxclvxsvypdnabnhcnlzelogrfcvvzpwrujkdvwvzlgdbdqgiruxygolkamiluvmfuoaslakmsaehubjxlcfvonmcnqenxwjgypqfedszrisegdtlwhxdsqeyhkynmtdyrjwwslwwtucbtuxxlkymelgqumhgyjnnjtqvaatmcfpbupfszdcuwgbyudffdpxszrqskmnpdqeauilbwnojibjfqwaalwnmevjbbzvptawuemsvlqfmonxycnfnzmgfmwpmjcyvhjfjpyhywjqbtjwhxudqhuclhyfbiuazzvnklkjfiupntduclftpddhfkioqkptklhynubibyjwllgexbjafcgubnelxzdapnxsqtmnqcdscrgpawigubbugtnxvebnrlujkxranwzbiemsvykjlmnyyfkrplutmpohohtqntxmkdfmlwvspedxlgylwbqfbhtolkfbfjfmvbhxafbwmlolagckjeffnwsiesgkhpyeupuyvcmfhlxygrmkkvuarjviqxfgkwturzkzwquefcyelduecwqrachowsxbdcgrvtkmlkyloqjjlyctuzsztafqearzuiogjrfqbseqibzddpabbfhbkeiorgslhecyicrvxvlzynxctnydzpgghjocuqimuxlvwymkhvbaqyljurieblfffxplmfwszrhvqiyzaqruihxvabytqvhmauzmrgcxtiotlkhtqcrugthgerkvixykexnlyxntpgagigdepzchsplujazcqabzvjcvutxriirzeydvffvzhhhihlfwewusmuzeecuytcwermdxpcffsewvyfearxirlmdwqfxsaljqnyvfiibqgxpfgkuoqadxcbdgcrhhrhvrdluzlefeerwhwinuqzuwuvairwqraajnifdihhzuqtciqmkrxafiuixbqacmgxfybmdghunmgwbidvanucokddovmznczycruztcayuwafcvjnqxhzarfvdqfounjciebxngwfwjknqmrappyuiewzdjshsbespzfcrwswtpayqaldwdvwiyoullwxshgzdluqbwecxkiyrqrguyepbcqzgafvjfxkzvglnghbmogenghozxncfenobraxqrhybxcoyovwreawnxiurnggbecnybohhicmvxlexizgvskafbxabzkzuvbrksbanikuewjgbkwcxoqibcpissudhljplgqifaebgxueiukmqxfcjwkysjjyuamlcatwqfhltyrwjdutbqoclvpcyhczybrmsatuwaswlziqqasyedtoxhmhktrjfwytfhxhncwiovjbpimtjpkwmxkalmxdjkwqhtakjraqiykrrmgncirghthsyfuhubmkhduibikgkorispskluycaepxdgxsodeqstbreyfuxtwksqqyqlvzvqtnoirjujqeltakrbiubuoqzyorkgcdkormvctirrowpemxtfgiqpzkadbpxaghodshuxorilbjxfigpcixuhcbaoulyxaoweiaojcbmbptwcfzgvylwcfyvmhoepvexcmkqvlrbknbhvctplytkqjjvmfadhksevedhfhmbhhqzgooudgxuazdskajgvuejhpvgngpfsayyyvupptpjvveuwrsrdwewhwivpmojlvvhnahpqwvrspjpradwkylbsketjriqqpvhhedbhkkvswcvwadunencyxtxmindabykaqoaoeifqdwihohbueikhixdfumrldazczdlorgtcwrrylwjxyxzgmdujwiapwpzrikupdeijmqrarvwhfcgzrkysnwsjeqhqtembrwkcjxtvjwwwkarolvbeczwinodvtgvbbqdwipckezgxwdizrnaxfexnjoafnrqxgywruytmfktkoygmbdwogjfjdvohglnxngnijysafyrlzofdovuslmcnhxfjjitvbdvwbluorpwtmtynrmzjrbiaqvzcqrxppojxnqfebtwpmfvuhigbahvjraidtmmceaxctnbtolhuiqcforksdbypcvjagrvsqguhgbyqgqiruvvqszezfmlntffbdrlcwyjcgriqycabijkokoqzntelifjxzyvytnbfflkoiipilzafyicgniewbuapmfzqcaximlfjhvuurfscozgpgghvsuvpqqtsojdphbumqrluvgnbhlymulcmqziytcampdpdrqvfwxygwbysofektetfrwedzklwgtjytibpdzakxjfvczcfxtdjpbngqzrmvyudslvlqsezwkqkkcbxoipifopzynllvbuujssspdsycqbyvdlgoauisrkvahwipcwukmvllgsaijkdrpuxlzyzsjabsatdgzmbebovnlydvqgjphwxqgfzaqyxadgfdmtbbqlpvciucjdrhlluumnqubughdaauyhkvdekpoamoliyttnyondnmphcesvowghyktattrxhvlbdlrsfjssflnvtyltawmuqoofhvvobkistzasjhmbkessjtditkmxpzlskojwokiatbwhdzjbzbsqkzmnzvdpyaxygrehqgfqqaxnnerizmarbooohufcdhwpvsulsstmcoivxapufjqtnaviffihkpyrbrzfjenqtxlxfqkfjvazubkrdqluffwaluvqilsfrqrdmnhdhrjkbpkgtkznoqnvpswoyndtqqckqqtcubtutrbxrforaitavuazzugvgczvsyfvqnuakykuwczsithogunmpejpmrxcjjvvzbxzyrltihlsirevhjohihonylwsekburnndcwxkybjifubalefhmiiitpqqzjjazsbfgtxopdjvbdgdmcfrfiebeopggbukfxxxcjotbiltihiddnuwrlzvrzsfmgkrulvcwbeqnkkhgobokkkspdzomfgvodqvzrvajlanwbyeioxtxbyfrapsjtgqvqzdoerwkfvzmsbzhumuotznpiozkvodscfaffpgiapftqlrthudvgvenfzyaxaummpmyhyuswvegysoppwnysdpqyzzrubdrenplyiqmmvthtfreynmltqbizpycniwwnunqynfyeigduomqqulemmdjqpndhuxvmizutfzxztrbavfopefglqyvrqwggjnrpnkcyghelmcnmtmtzsepopwzoirjcdjenpuqpvutueinapitkhsmmraytgftzpjlekyhcwdltjjxsycydcvfmzwgbcxcoboqcbxzkszwlhxgpnpynjjhaqucnwhxhoyhqrkeeqgggqliogjuqyxgzcfvhmtkevipopxmowjotswevzmsxngshovradrjxihwbnqqpuhobnmlfassydwmlcgirrhrlxhkchzwrokrllbibjecgqfpttvuerckuegvooxssxvdcemgbuuirzfckxnxwsszrpcuogfuusrplrielkgvhvygnjkfzfzxsqhifoxctfhuipqxctdlvgdkewprxfuxsgfvfqtclxgzsadtvhuvpqrxjjjjrrxqgovoyuipqnhosvoufbqvugpplwzrphrjrnrllxpoxtuwlwkzotpebuamennaapntnneyvhahgxdbhtbqplduxaodhsskkpqynrzonhagrwxcoeagawjvcucsvbotsaelkywjoyeehsbfdwgoqnyyaunvhqdjvtsbxbbbpgfxnngxmikrrgsdbsokwdpyevqoplxqudieqpisrsbfxugybymbjwzoyevpigikboxhdntktxmzvjzywtbvcjrhuhwosrijcqmkfjcqxbitntabzbroolnxjllqfnznkaystntwegkkofkxsyxuamsxpubavzwfoixtjlluujjwifajginhtcywidlmkkhysmulzvzldxwyopdodzryxpkqrdukecragplzfysuwqcqaoqqfjuyfqliwkmvwvfubcklvdhzutgtgumayojpvovumxemspycidbnnmcxyarkxttcvqqhomkilqaqoovnrqlvubeeofiwxjqyayzcycgoiircgxgzhnqrbcgkrofcotpkqouabcqbdrouxxageejbjlfuzmbmfckrqbbyyhzvjrrpzbefamvoufqogovzaokciuzmevfyuaaypyjqggwipkgzkbmlbafbzlljsfmhscsodcrbbfylkfyqxokfgolmosuxpdsjspfciammxqirioodfxngosyzlkltpmsxpafmabupevthayfxdbiovsqxkrenmfkoctidrdqinrqojnelptkuzrcebddkboyxkhrfwrgvikyrvjihcfitdhdtexfnxtcsgmxkntaimhvdrndqprsddtqctysmzounvmsvxxhwgoxegqjqtouwapoxuvbkmpriuanvqoxorjcpprofqdspoosgmmlnztpaubosqqknbbqnhpyyubonpkwmlowfjgpmtgzlqujxljdadtosbhnmngepkjlmvuescozvzclobocahnkyplhqstopknrhufneybwebebhgxvwyydolesgbojzvvndmsgbhxhoybgakgdesrsmvrzhmijyjytdmpdxehxrhgsyiedfrxlgvxpxwyjaxjowwnuujnabjqcylypgduzrwituqvwckkworwlkcluicfwgydzothrmcisvfrhgpnpecbhxisfzchndxftawqybqnfuxetoupeplgxatqxytnfmokteeqmxjemgwrufklkwaxazzgelzfgglhirzjffkoqxmbtwkhhbodamujvwljmlivdbbirtubccsgrvkylyfmppilsxezcdozjpbdfjtnuwgfsreodmpafkzclgtzrgvbewdbaoephgkmwwidfcvzjkvrcafkzfdxxxdpgbqrybzejaaezxrwpxbeziscdwfbfahiefzokbnhgfqxkbcuixenmmnvolepkzkpeasrygpyoummmsoticswegyqyxkaqscmrtsnoblraczloiqcznabchbatdicakdpulzkddhcagdeogibasyddubcezmztaukusexmsjymljapvllrqfhpgkfudyedlcbhwpfimlplclrcxpttnxamzucpfagisbajnyrzvxxlzjolxxisexrojzwcratimkamjliplucbdejtcgwryaweatwbkqardkbmrdbdseggojlslcjhmcumhxikgdzxjuyyjcyyvkvseyvqjewdlrrpnwxltnnedjupeclekzyvoormnowjkrpuwfavricrvjoqqbjqijpqlmsnwmonmbjxvbpokumfvdfnxbhxxsfzxcozwhzmgrwkdczrcigxbuvlnyyuvsraobwuznkxdizyqifjwgtwnmxunhukoeqpxafupdxwzfymwsblpvyyktdspctcxmwsxfqgsgedimmhcqjztpmrbavhogwuhzbngycbggsoakrvuceiditgcwxaopcirtivcibqpxbqdstcokmypyuzlaowongknpzitpdhjkoszoqvdgrtqvckyjmduketumefixobawbekqfrnwebsijgvihedwmegkssznkwgwqgavcakfhdwesqyjvotcevhgltzcknzqrindzbywgiibjsnvsttugwizaxayngnmfsmjopzqygphvxdhdwnrnksdqwnahecbzpxeetihclinvbxmrpoiynuxsyabdmhtaqnjtsiearotujspwgmnjoqgeqbcrbrmssjtbuqciflfjjfxkiapfttwymziapbxjenhwrzcdrjtjudhcztpwqungqidwzjhsgwlxlujrpeepubglthkbnhbdqwwlbjbnndfjupllxyluagyieeurajyhdqcinkmosympawgreeihdjcfggtomoeooqbklqfxoavtpcdhrlcsezabwufygrghnmtdvisfrzfjmmgnqwnxdyvidbxizsunzosikevlwzgrybbidzyytsaspbgbgzrmgimcmmulodqbqljxeusveynagjkphulpqnqkfrbjcvtntzmjwsfifmhsphicrtchdydlklhrdghmtacbjfktgvphhlhhkkcqkytcfgjuoblfdjpkuocherhufixafdbgotxrxrcuohgpxpogfggvkdrkixzfkahtnwhvbntqbrpqxvutbldhrfirzxfupybrvolteycfjkdcaubwtqomzfepcevmpecqpteevaubtbchlaakgqpzvjwqxzbcneektiwhvyoexdufbirqhukdmtlfqtjhboncqciumvxccncrjpecyuctxfdsekblmnpmjkotsfopoeakeetsvagoayijofejkjixevcvopuymjxdpgrjupgbpjpqacdbbcpzuqwaztmxfriypcfdybjamjxflzinuxcszriqnsokpegxzfzgidrjsbfftnzxgcxtbrordopldbrtxqeeeeiixdnedgoaohbadmrnstciefemzhepbfwccdulrgduxhebifzivhzgiueajetcrwqvmeailiyyjclgfeizotkkjiaedwsqsngsoqrpekysgzlmtijsxdrcpjchecchkxhjuyevtdlohohbgrkyfsmygplztmvrgeuqjuenepnsarcopkadsbvvpzmcacliqagsfvsfylfoinibat"
checkInclusion(s1,s2)

