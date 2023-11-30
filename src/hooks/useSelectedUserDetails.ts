import { useRecoilValue } from 'recoil';
import { selectedUserState } from '../state/selectedUserState';

const useSelectedUserDetails = () => {
  const selectedUser = useRecoilValue(selectedUserState);
  let errorMessage = '';

  if (!selectedUser) {
    return {
      userDetails: null,
      userImage: null,
      userFullName: null,
      errorMessage,
    };
  }

  try {
    const {
      name,
      email,
      nat,
      gender,
      picture,
      cell,
      dob,
      phone,
      location,
      id,
    } = selectedUser;
    const dateOfBirth = new Date(dob.date).toLocaleDateString();

    const userDetails = [
      { title: 'Nationality', value: nat },
      { title: 'Email', value: email },
      { title: 'Date Of Birth', value: dateOfBirth },
      { title: 'Age', value: dob.age.toString() },
      { title: 'Gender', value: gender },
      { title: 'Cellphone', value: cell },
      { title: 'Phone', value: phone },
      { title: 'Country', value: location.country },
      { title: 'State', value: location.state },
      { title: 'City', value: location.city },
      {
        title: 'Address',
        value: `${location.street.name} ${location.street.number}`,
      },
      { title: 'Postal Code', value: location.postcode },
      { title: 'ID Type', value: id.name },
      { title: 'ID Number', value: id.value || 'N/A' },
    ];

    const userImage = picture.large;
    const userFullName = `${name.title}. ${name.first} ${name.last}`;

    return { userDetails, userImage, userFullName, errorMessage };
  } catch (error) {
    return {
      userDetails: null,
      userImage: null,
      userFullName: null,
      errorMessage,
    };
  }
};

export default useSelectedUserDetails;
