import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Text, View, TextInput, Pressable } from "react-native";

import { insertUser } from "@/redux/features/user.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Footer, Header, Input, PageView, RadioButton } from "@/components";

export default function App() {
  const { isSuccess } = useAppSelector((state) => state.user);

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address_1, setAddress_1] = useState("");
  const [address_2, setAddress_2] = useState("");
  const [gender, setGender] = useState("Male");
  const [dob, setDOB] = useState("");
  const [phone, setPhone] = useState("");
  const [grandFather, setGrandFather] = useState("");
  const [father, setFather] = useState("");
  const [bloodGroup, setBloodGroup] = useState("O+");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");

  const router = useRouter();
  const dispatch = useAppDispatch();
  const middleNameRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const address1Ref = useRef<TextInput>(null);
  const address2Ref = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const occupationRef = useRef<TextInput>(null);

  useEffect(() => {
    if (isSuccess) {
      router.push("/(auth)/success");
    }
  }, [isSuccess, router]);

  const onSubmit = () => {
    let obj = {
      org_id: "1",
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
      address_1: address_1,
      address_2: address_2,
      gender: gender,
      date_of_birth: dob,
      phone: phone,
      // grand_father: grandFather,
      parent_id: "5",
      blood_group: bloodGroup,
      email: email,
      occupation: occupation,
    };

    console.log("obj =======> ", obj);

    dispatch(insertUser(obj));
  };

  return (
    <PageView>
      <Header />

      <Text className="text-orange-400 mt-5 text-center text-xl font-semibold md:text-2xl lg:text-4xl mb-10">
        Welcome to K.M.T Foundation - Next Generation
      </Text>

      <View className="w-full px-5 md:w-1/3 lg:w-1/5 md:self-center">
        <Input
          label="First Name"
          placeholder="Regan"
          returnKeyType="next"
          onChangeText={(value) => setFirstName(value)}
          value={firstName}
          onSubmitEditing={() => lastNameRef?.current?.focus()}
          blurOnSubmit={false}
          required
        />

        <Input
          label="Middle Name"
          placeholder="Raj"
          returnKeyType="next"
          onChangeText={(value) => setMiddleName(value)}
          value={middleName}
          onSubmitEditing={() => middleNameRef?.current?.focus()}
          blurOnSubmit={false}
        />

        <Input
          label="Last Name"
          inputRef={lastNameRef}
          returnKeyType="next"
          placeholder="Timsina"
          onChangeText={(value) => setLastName(value)}
          value={lastName}
          onSubmitEditing={() => address1Ref?.current?.focus()}
          blurOnSubmit={false}
          required
        />

        <Input
          label="Address 1"
          returnKeyType="next"
          inputRef={address1Ref}
          placeholder="Biratchowk, Sundarharaicha-10, Morang"
          onChangeText={(value) => setAddress_1(value)}
          value={address_1}
          onSubmitEditing={() => address2Ref?.current?.focus()}
          blurOnSubmit={false}
          required
        />

        <Input
          label="Address 2"
          inputRef={address2Ref}
          returnKeyType="done"
          placeholder="Biratchowk, Sundarharaicha-10, Morang"
          onChangeText={(value) => setAddress_2(value)}
          value={address_2}
          onSubmitEditing={() => console.log(" === finally === ")}
          blurOnSubmit={false}
        />

        <View className="mb-6">
          <View className="flex-row justify-start gap-1">
            <Text className="mb-2 font-semibold text-sm not-italic text-black">Gender</Text>

            <Text className="text-red-400 font-semibold text-xl bottom-1 not-italic">*</Text>
          </View>

          <View className="flex-row pl-4 justify-start gap-14 items-center">
            <RadioButton title="Male" selected={gender} onPress={() => setGender("Male")} />

            <RadioButton title="Female" selected={gender} onPress={() => setGender("Female")} />
          </View>
        </View>

        <Input
          label="Date of Birth"
          returnKeyType="next"
          placeholder="22/01/2048"
          onChangeText={(value) => setDOB(value)}
          value={dob}
          onSubmitEditing={() => phoneRef?.current?.focus()}
          blurOnSubmit={false}
          required
        />

        <Input
          label="Phone"
          inputRef={phoneRef}
          placeholder="9842566750"
          onChangeText={(value) => setPhone(value)}
          value={phone}
          required
        />

        <Input
          label="Grand Father"
          placeholder="Chandra Prasad Timsina"
          onChangeText={(value) => setGrandFather(value)}
          value={grandFather}
          required
        />

        <Input
          label="Father"
          placeholder="Gobinda Prasad Timsina"
          onChangeText={(value) => setFather(value)}
          value={father}
          required
        />

        <View className="mb-6">
          <View className="flex-row justify-start gap-1">
            <Text className="mb-2 font-semibold text-sm not-italic text-black">Blood Group</Text>

            <Text className="text-slate-400 font-normal text-sm not-italic">(Optional)</Text>
          </View>

          <View className="flex-row flex-wrap pl-4 justify-start gap-x-14 gap-y-4 items-center">
            <RadioButton title="O+" selected={bloodGroup} onPress={() => setBloodGroup("O+")} />

            <RadioButton title="O-" selected={bloodGroup} onPress={() => setBloodGroup("O-")} />

            <RadioButton title="A+" selected={bloodGroup} onPress={() => setBloodGroup("A+")} />

            <RadioButton title="A-" selected={bloodGroup} onPress={() => setBloodGroup("A-")} />

            <RadioButton title="AB+" selected={bloodGroup} onPress={() => setBloodGroup("AB+")} />

            <RadioButton title="AB-" selected={bloodGroup} onPress={() => setBloodGroup("AB-")} />
          </View>
        </View>

        <Input
          label="Email"
          inputRef={emailRef}
          returnKeyType="next"
          placeholder="timsina.regan@gmail.com"
          onChangeText={(value) => setEmail(value)}
          value={email}
          onSubmitEditing={() => occupationRef?.current?.focus()}
          blurOnSubmit={false}
        />

        <Input
          label="Occupation"
          inputRef={occupationRef}
          returnKeyType="go"
          placeholder="Software Engineer"
          onChangeText={(value) => setOccupation(value)}
          value={occupation}
          onSubmitEditing={() => onSubmit()}
          blurOnSubmit={true}
        />

        <Pressable
          onPress={onSubmit}
          className="mt-5 self-center mb-16 h-10 bg-orange-400 rounded-xl w-[50%] flex items-center justify-center">
          <Text className="text-white font-medium text-xl not-italic">Submit</Text>
        </Pressable>
      </View>

      <Footer />
    </PageView>
  );
}
