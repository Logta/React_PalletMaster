import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import SkillListPC from './PC/SkillList_PC';
import SkillListMobile from './Mobile/SkillList_Mobile';

import { skill, character } from '../modules/commonType';

type Props = {
    skills: skill[];
    setCharacter: (character: character) => void;
    setSkillWorkValue: (name: string, work: number) => void;
    setSkillInterestValue: (name: string, interest: number) => void;
    checkSetSkillValue: (value: number, isWork: boolean) => boolean;
};

export default function SimpleList(props: Props) {
    return (
        <div>
            {/* タブレット以上なら隠す -- モバイル画面で表示 */}
            <Hidden smUp implementation="css">
                <SkillListMobile
                    skills={props.skills}
                    setCharacter={props.setCharacter}
                    setSkillInterestValue={props.setSkillInterestValue}
                    setSkillWorkValue={props.setSkillWorkValue}
                    checkSetSkillValue={props.checkSetSkillValue}
                />
            </Hidden>

            {/* モバイル以下なら隠す -- モバイル画面以外で表示 */}
            <Hidden xsDown implementation="css">
                <SkillListPC
                    skills={props.skills}
                    setCharacter={props.setCharacter}
                    setSkillInterestValue={props.setSkillInterestValue}
                    setSkillWorkValue={props.setSkillWorkValue}
                    checkSetSkillValue={props.checkSetSkillValue}
                />
            </Hidden>
        </div>
    );
}
