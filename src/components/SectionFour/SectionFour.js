import React from 'react';
import SecFourBlock from './SecFourBlock/SecFourBlock';
import s from './SectionFour.module.sass';
import ImgThree from '../../img/joanna-kosinska-340748.png';

function SectionFour() {
  const data = [
    {
      text: 'Physical Health',
      color: '#22356F',
      hover:
        'center / cover no-repeat url(https://blog.bcbsnc.com/wp-content/uploads/2017/03/shutterstock_700042609-1.jpg}',
    },
    {
      text: 'Mental Health',
      color: '#0052C1',
      hover:
        'center / cover no-repeat url(https://ww2.kqed.org/app/uploads/sites/23/2020/01/mental-health-excused-absences-800x686.jpg)',
    },
    {
      text: 'Nutrition',
      color: '#C4E769',
      hover: `center / cover no-repeat url(${ImgThree})`,
    },
    {
      text: 'Gymnastics',
      color: '#62D0DF',
      hover:
        'center / cover no-repeat url(https://i.guim.co.uk/img/media/7e97896335edb17a4a2b306544095e7226fd1b4f/0_172_3500_2100/master/3500.jpg?width=1200&quality=85&auto=format&fit=max&s=29842948ace1452cee5da0a8900250e3)',
    },
    {
      text: 'Crossfit',
      color: '#DEE1FF',
      hover:
        'center / cover no-repeat url(https://images.livemint.com/img/2020/10/29/1140x641/iStock-825534354_1603983898283_1603983921852.jpg)',
    },
    {
      text: 'Aerobics',
      color: '#8F00FF',
      hover:
        'center / cover no-repeat url(https://cdn.shopify.com/s/files/1/0009/1112/products/step-aerobic-picture-id471445500_1800x.jpg?v=1612806942)',
    },
  ];

  return (
    <div className={s.secFour}>
      {data.map((b) => (
        <SecFourBlock {...b} />
      ))}
    </div>
  );
}

export default SectionFour;
