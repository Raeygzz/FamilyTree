import React from "react";
import { useFormik } from "formik";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Text, View, TextInput, Pressable } from "react-native";

import { usePlatform } from "@/src/hooks";
import { UserSchema } from "@/src/validations";
import { AppConstants } from "@/src/constants";
import { fetchOrganization } from "@/src/redux/features";
import { useAppDispatch, useAppSelector } from "@/src/redux/store";
import { Footer, Header, Input, PageView, RadioButton, Picker, ToastMessage } from "@/src/components";
import {
  // fetchHeads,
  fetchUsers,
  insertUser,
  resetUserState,
} from "@/src/redux/features/user.slice";

export default function App() {
  const { data: organizationData } = useAppSelector((state) => state.organization);
  // const { data: headsList } = useAppSelector((state) => state.user.fetchHeads);
  const { data: usersList } = useAppSelector((state) => state.user.fetchUsers);
  const { isSuccess, error: insertUserError } = useAppSelector((state) => state.user.inserUser);

  const [openMaritialPicker, setOpenMaritialPicker] = useState(false);
  const [openKidsPicker, setOpenKidsPicker] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const [error, setError] = useState({ title: "", message: "" });

  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isNativePlatform } = usePlatform();
  const middleNameRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const address1Ref = useRef<TextInput>(null);
  const address2Ref = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const occupationRef = useRef<TextInput>(null);
  // eslint-disable-next-line no-undef
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>();

  const { handleChange, handleSubmit, handleBlur, values, errors, touched, setFieldValue, setFieldTouched } = useFormik(
    {
      validationSchema: UserSchema,
      initialValues: {
        org_id: "",
        parent_id: "",
        firstName: "",
        middleName: "",
        lastName: "",
        address_1: "",
        address_2: "",
        gender: "Male",
        dob: "",
        phone: "",
        maritialStatus: "",
        maritialStatusObj: { id: "-1", label: "Select", value: "-1" },
        spouseName: "",
        kidsStatus: "",
        kidsStatusObj: { id: "-1", label: "Select", value: "-1" },
        numberOfKids: "",
        // grandFather: "",
        // father: "",
        bloodGroup: "O+",
        email: "",
        occupation: "",
      },
      onSubmit: (values) => {
        let isPhoneValid = usersList?.some((obj) => {
          return obj.phone === values.phone;
        });

        let isEmailValid = usersList?.some((obj) => {
          if (values.email !== "") {
            return obj.email === values.email;
          }
        });

        if (isPhoneValid) {
          setError({
            title: "Phone number already exists!",
            message:
              "Please fill in with your correct details or contact admin, if you found problem while submitting the form",
          });

          setOpenToast(true);

          return;
        }

        if (isEmailValid) {
          setError({
            title: "Email already exists!",
            message:
              "Please fill in with your correct details or contact admin, if you found problem while submitting the form",
          });

          setOpenToast(true);

          return;
        }

        let obj = {
          org_id: values.org_id,
          // grandFather: values.grandFather,
          // parent_id: values.parent_id,
          first_name: values.firstName,
          middle_name: values.middleName,
          last_name: values.lastName,
          address_1: values.address_1,
          address_2: values.address_2,
          gender: values.gender,
          date_of_birth: values.dob,
          phone: values.phone,
          maritial_status: values.maritialStatus,
          spouse_name: values.maritialStatus !== "1" ? "" : values.spouseName,
          kids_status: values.maritialStatus !== "1" ? "" : values.kidsStatus,
          number_of_kids: values.maritialStatus !== "1" ? "" : values.numberOfKids,
          blood_group: values.bloodGroup,
          email: values.email,
          occupation: values.occupation,
        };

        dispatch(insertUser(obj));
      },
    },
  );

  useEffect(() => {
    Promise.all([
      dispatch(fetchOrganization()),
      // dispatch(fetchHeads()),
      dispatch(fetchUsers()),
    ])
      .then((values) => {})
      .catch((err) => {})
      .finally(() => {});
  }, [dispatch]);

  useEffect(() => {
    if (organizationData && organizationData?.length > 0) {
      setFieldValue("org_id", organizationData[0].id);
    }

    // if (headsList && headsList?.length > 0) {
    //   setFieldValue(
    //     "grandFather",
    //     headsList?.[1]?.first_name + " " + headsList?.[1]?.middle_name + " " + headsList?.[1]?.last_name,
    //   );
    // }
  }, [
    organizationData,
    // headsList,
    setFieldValue,
  ]);

  useEffect(() => {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!insertUserError) {
      setOpenToast(true);
    }
  }, [insertUserError]);

  useEffect(() => {
    if (openToast) {
      // eslint-disable-next-line no-undef
      timerRef.current = setTimeout(() => {
        setOpenToast(false);
        setError({ title: "", message: "" });
      }, 3000);

      return () => {
        if (timerRef.current) {
          // eslint-disable-next-line no-undef
          clearTimeout(timerRef.current);
        }
      };
    }
  }, [openToast]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(resetUserState());

      router.push("/(auth)/success");
    }
  }, [dispatch, isSuccess, router]);

  const onDOBChangeHandler = (dob: string) => {
    if (dob.length === 0) {
      setFieldValue("dob", "");
      setFieldTouched("dob", true);
      return;
    }

    // Remove any non-numeric characters
    const cleaned = dob.replace(/[^0-9]/g, "");

    // Format to YYYY/MM/DD
    let formatted = cleaned;
    if (cleaned.length > 4) formatted = `${cleaned.slice(0, 4)}/${cleaned.slice(4)}`;
    if (cleaned.length > 6) formatted = `${cleaned.slice(0, 4)}/${cleaned.slice(4, 6)}/${cleaned.slice(6, 8)}`;

    setFieldValue("dob", formatted);
    setFieldTouched("dob", true);
  };

  return (
    <>
      <PageView>
        <Header />

        <Text className="text-orange-400 mt-5 text-center text-xl font-semibold md:text-2xl lg:text-4xl mb-6">
          Welcome to K.M.T Foundation - Next Generation
        </Text>

        <View
          className={`${isNativePlatform ? "py-3" : "py-1"} px-3 w-[94%] md:w-1/2 lg:w-1/5 self-center mb-5 shadow-md text-orange-400 rounded-lg flex-row justify-start`}>
          <Text className="w-[10%] text-xs font-semibold text-orange-400 italic">Note:</Text>

          <Text className="w-[90%] text-xs font-medium text-orange-400 italic">
            Please type with english keyboard while filing up the form.
          </Text>
        </View>

        <View className="w-full px-5 md:w-1/2 lg:w-1/5 md:self-center">
          <Input
            label="First Name"
            placeholder="Regan"
            returnKeyType="next"
            onChangeText={handleChange("firstName")}
            value={values.firstName}
            onBlur={handleBlur("firstName")}
            error={touched.firstName ? errors.firstName : undefined}
            onSubmitEditing={() => middleNameRef?.current?.focus()}
            blurOnSubmit={false}
            required
          />

          <Input
            label="Middle Name"
            inputRef={middleNameRef}
            placeholder="Raj"
            returnKeyType="next"
            onChangeText={handleChange("middleName")}
            value={values.middleName}
            onBlur={handleBlur("middleName")}
            error={touched.middleName ? errors.middleName : undefined}
            onSubmitEditing={() => lastNameRef?.current?.focus()}
            blurOnSubmit={false}
          />

          <Input
            label="Last Name"
            inputRef={lastNameRef}
            returnKeyType="next"
            placeholder="Timsina"
            onChangeText={handleChange("lastName")}
            value={values.lastName}
            onBlur={handleBlur("lastName")}
            error={touched.lastName ? errors.lastName : undefined}
            onSubmitEditing={() => address1Ref?.current?.focus()}
            blurOnSubmit={false}
            required
          />

          <Input
            label="Address 1"
            returnKeyType="next"
            inputRef={address1Ref}
            placeholder="Biratchowk, Sundarharaicha-10, Morang"
            onChangeText={handleChange("address_1")}
            value={values.address_1}
            onBlur={handleBlur("address_1")}
            error={touched.address_1 ? errors.address_1 : undefined}
            onSubmitEditing={() => address2Ref?.current?.focus()}
            blurOnSubmit={false}
            required
          />

          <Input
            label="Address 2"
            inputRef={address2Ref}
            returnKeyType="done"
            placeholder="Biratchowk, Sundarharaicha-10, Morang"
            onChangeText={handleChange("address_2")}
            value={values.address_2}
            onBlur={handleBlur("address_2")}
            error={touched.address_2 ? errors.address_2 : undefined}
            onSubmitEditing={() => console.log(" === finally === ")}
            blurOnSubmit={true}
          />

          <View className="mb-6">
            <View className="flex-row justify-start gap-1">
              <Text className="mb-2 font-semibold text-sm not-italic text-black">Gender</Text>

              <Text className="text-red-400 font-semibold text-xl bottom-1 not-italic">*</Text>
            </View>

            <View className="flex-row pl-4 justify-start gap-14 items-center">
              <RadioButton title="Male" selected={values.gender} onPress={() => setFieldValue("gender", "Male")} />

              <RadioButton title="Female" selected={values.gender} onPress={() => setFieldValue("gender", "Female")} />
            </View>
          </View>

          <Input
            label="Date of Birth"
            returnKeyType="next"
            placeholder="YYYY/MM/DD"
            keyboardType="number-pad"
            onChangeText={onDOBChangeHandler}
            value={values.dob}
            onBlur={handleBlur("dob")}
            error={touched.dob ? errors.dob : undefined}
            onSubmitEditing={() => phoneRef?.current?.focus()}
            blurOnSubmit={false}
            note="Please fill your nepali date of birth."
            required
          />

          <Input
            label="Phone"
            inputRef={phoneRef}
            placeholder="9842566750"
            keyboardType="number-pad"
            onChangeText={handleChange("phone")}
            value={values.phone}
            onBlur={handleBlur("phone")}
            error={touched.phone ? errors.phone : undefined}
            required
          />

          <Picker
            data={AppConstants.Static.YES_NO_ARRAY}
            label="Are you married?"
            isOpen={openMaritialPicker}
            onPress={() => setOpenMaritialPicker(!openMaritialPicker)}
            onSelectText={(val) => {
              setFieldValue("maritialStatusObj", val);
              setFieldValue("maritialStatus", val.value);
              setFieldTouched("maritialStatus", true);
            }}
            onClose={() => setOpenMaritialPicker(false)}
            selected={values?.maritialStatusObj?.label || "Select"}
            error={
              touched.maritialStatusObj && values?.maritialStatusObj?.value === "-1"
                ? "maritialStatus is a required field"
                : undefined
            }
            required
          />

          {values?.maritialStatusObj?.value === "1" ? (
            <>
              <Input
                label="Spouse Name"
                placeholder="Samantha Jones"
                onChangeText={handleChange("spouseName")}
                value={values.spouseName}
                onBlur={handleBlur("spouseName")}
                error={touched.spouseName ? errors.spouseName : undefined}
                required={values?.maritialStatusObj?.value === "1"}
              />

              <Picker
                data={AppConstants.Static.YES_NO_ARRAY}
                label="Do you have kids?"
                isOpen={openKidsPicker}
                onPress={() => setOpenKidsPicker(!openKidsPicker)}
                onSelectText={(val) => {
                  setFieldValue("kidsStatusObj", val);
                  setFieldValue("kidsStatus", val.value);
                  setFieldTouched("kidsStatus", true);
                }}
                onClose={() => setOpenKidsPicker(false)}
                selected={values?.kidsStatusObj?.label || "Select"}
                error={
                  touched.kidsStatusObj && values?.kidsStatusObj?.value === "-1"
                    ? "kidsStatus is a required field"
                    : undefined
                }
                required={values?.maritialStatusObj?.value === "1"}
              />
            </>
          ) : null}

          {values?.maritialStatusObj?.value === "1" && values?.kidsStatusObj?.value === "1" ? (
            <Input
              label="Total number of kids"
              placeholder="0"
              keyboardType="number-pad"
              onChangeText={handleChange("numberOfKids")}
              value={values.numberOfKids}
              onBlur={handleBlur("numberOfKids")}
              error={touched.numberOfKids ? errors.numberOfKids : undefined}
              required
            />
          ) : null}

          {/* <Input
          editable={false}
          label="Grand Father"
          placeholder="Chandra Prasad Timsina"
          onChangeText={handleChange("grandFather")}
          value={values.grandFather}
          onBlur={handleBlur("grandFather")}
          error={touched.grandFather ? errors.grandFather : undefined}
          required
        />

        <Picker label="Father" required onPress={onPickerPress} selected={values.parent_id || "Select from picker"} /> */}

          <View className="mb-6">
            <View className="flex-row justify-start gap-1">
              <Text className="mb-2 font-semibold text-sm not-italic text-black">Blood Group</Text>

              <Text className="text-slate-400 font-normal text-sm not-italic">(Optional)</Text>
            </View>

            <View className="flex-row flex-wrap pl-4 justify-start gap-x-14 gap-y-4 items-center">
              <RadioButton title="O+" selected={values.bloodGroup} onPress={() => setFieldValue("bloodGroup", "O+")} />

              <RadioButton title="O-" selected={values.bloodGroup} onPress={() => setFieldValue("bloodGroup", "O-")} />

              <RadioButton title="A+" selected={values.bloodGroup} onPress={() => setFieldValue("bloodGroup", "A+")} />

              <RadioButton title="A-" selected={values.bloodGroup} onPress={() => setFieldValue("bloodGroup", "A-")} />

              <RadioButton title="B+" selected={values.bloodGroup} onPress={() => setFieldValue("bloodGroup", "B+")} />

              <RadioButton title="B-" selected={values.bloodGroup} onPress={() => setFieldValue("bloodGroup", "B-")} />

              <RadioButton
                title="AB+"
                selected={values.bloodGroup}
                onPress={() => setFieldValue("bloodGroup", "AB+")}
              />

              <RadioButton
                title="AB-"
                selected={values.bloodGroup}
                onPress={() => setFieldValue("bloodGroup", "AB-")}
              />
            </View>
          </View>

          <Input
            label="Email"
            inputRef={emailRef}
            returnKeyType="next"
            keyboardType="email-address"
            placeholder="timsina.regan@gmail.com"
            onChangeText={handleChange("email")}
            value={values.email}
            onBlur={handleBlur("email")}
            error={touched.email ? errors.email : undefined}
            onSubmitEditing={() => occupationRef?.current?.focus()}
            blurOnSubmit={false}
          />

          <Input
            label="Occupation"
            inputRef={occupationRef}
            returnKeyType="go"
            placeholder="Software Engineer"
            onChangeText={handleChange("occupation")}
            value={values.occupation}
            onBlur={handleBlur("occupation")}
            error={touched.occupation ? errors.occupation : undefined}
            onSubmitEditing={() => handleSubmit()}
            blurOnSubmit={true}
          />

          <Pressable
            onPress={() => handleSubmit()}
            className="mt-5 self-center mb-16 h-10 bg-orange-400 rounded-xl w-[50%] flex items-center justify-center">
            <Text className="text-white font-medium text-xl not-italic">Submit</Text>
          </Pressable>
        </View>

        <Footer />
      </PageView>

      <ToastMessage open={openToast} title={error?.title} message={error?.message} />
    </>
  );
}
