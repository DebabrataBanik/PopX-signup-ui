const validateField = (name, value) => {
  switch (name){
    case 'fullname':
      return !value.trim() ? 'Full name is required.' : null;
    case 'phone':
      return !/^\d{10}$/.test(value.trim()) ? 'Phone must be 10 digits.' : null;
    case 'email':
      return !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) 
        ? 'Please enter valid email address.' : null;
    case 'password':
      return value.length < 6 ? 'Password must be atleast 6 characters.' : null;
    case 'agency':
      return !value ? 'Field is required.' : null;
    default: return null
  }
}

export default validateField;