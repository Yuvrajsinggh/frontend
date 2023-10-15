import React from 'react'
import SideNav from '../components/Sidebar'
import Pmiddle from '../components/Profile/Pmiddle'

const samplePosts = [
  {
    id: '1',
    caption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    name: 'Philip Myrtorp',
    username: 'philipmyrtorp',
    image:
      'https://images.unsplash.com/photo-1602489053809-4d912f6c8b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    time: '2h',
    isAnonymous: false,
    replies: 32,
    likes: 321,
  },
  {
    id: '2',
    caption:
      'fringilla urna porttitor rhoncus. Cras adipiscing enim eu turpis egestas. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Turpis tincidunt id aliquet risus feugiat in. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Id faucibus nisl tincidunt eget nullam non nisi est sit. Vitae sapien pellentesque habitant morbi tristique senectus et netus',
    name: 'Jasmin Chew',
    username: 'jnchew',
    image:
      'https://images.unsplash.com/photo-1639337916963-e16623394e63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    time: '13h',
    isAnonymous: false,
    replies: 2,
    likes: 76,
  },
  {
    id: '3',
    caption:
      'Faucibus interdum posuere lorem ipsum. Donec pretium vulputate sapien nec. Leo vel orci porta non pulvinar neque. Mattis vulputate enim nulla aliquet.',
    username: 'Anonymous',
    name: 'Random',
    isAnonymous: true,
    replies: 32,
    likes: 85,
  },
  {
    id: '4',
    caption:
      'Nullam ac tortor vitae purus. Elit ullamcorper dignissim cras tincidunt. Consequat ac felis donec et odio pellentesque diam volutpat commodo.',
    name: 'Zane Bolen',
    username: 'zanebolen',
    image:
      'https://images.unsplash.com/photo-1616085258995-85bd229048d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDcxfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    time: '4h',
    isAnonymous: false,
    replies: 3,
    likes: 87,
  },
  {
    id: '5',
    caption:
      'blandit turpis cursus in. Nibh mauris cursus mattis molestie. Molestie at elementum eu facilisis sed. Sapien eget mi proin sed libero enim sed faucibus turpis. Tellus pellentesque eu tincidunt tortor aliquam nulla. Maecenas sed enim ut sem viverra aliquet eget sit amet. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Quis hendrerit dolor magna eget.',
    username: 'Anonymous',
    name: 'Random1',
    time: '8h',
    isAnonymous: true,
    replies: 23,
    likes: 12,
  },
  {
    id: '6',
    caption:
      'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec.',
    name: 'Freddie Addery',
    username: 'freddieaddery',
    image:
      'https://images.unsplash.com/photo-1652079129755-97b606e144ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzN3x0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    time: '2h',
    isAnonymous: false,
    replies: 65,
    likes: 151,
  },
  {
    id: '7',
    caption:
      'Aenean euismod elementum nisi quis eleifend quam adipiscing. Magna sit amet purus gravida quis. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Morbi tincidunt augue interdum velit euismod. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Eget duis at tellus at urna condimentum mattis pellentesque id. Ut tortor pretium viverra suspendisse potenti nullam. Accumsan in nisl nisi scelerisque eu ultrices.',
    username: 'Anonymous',
    time: '1hr',
    name: 'Random2',
    isAnonymous: true,
    replies: 1,
    likes: 103,
  },
  {
    id: '8',
    caption:
      'Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Eu turpis egestas pretium aenean pharetra magna ac placerat. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Vivamus at augue eget arcu dictum varius duis at.',
    name: 'Akindele Ibukun',
    username: 'akind_bukun',
    image:
      'https://images.unsplash.com/photo-1652437225670-f7969e367375?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1NXx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    time: '7h',
    isAnonymous: false,
    replies: 51,
    likes: 2,
  },
  {
    id: '9',
    caption:
      'Semper risus in hendrerit gravida. Aliquam sem et tortor consequat id porta nibh venenatis cras',
    username: 'Anonymous',
    time: '7h',
    name: 'Random3',
    isAnonymous: true,
    replies: 2,
    likes: 65,
  },
  {
    id: '10',
    caption:
      'Est lorem ipsum dolor sit amet consectetur adipiscing elit. Quis hendrerit dolor magna eget.',
    username: 'Anonymous',
    time: '15h',
    name: 'Rndom4',
    isAnonymous: true,
    replies: 862,
    likes: 312,
  },
];

const Profile = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative'>
        <div className='w-full h-full flex relative'>
            <SideNav />
            <Pmiddle posts={samplePosts} />
        </div>
    </div>
  )
}

export default Profile